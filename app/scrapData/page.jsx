'use client';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Textarea,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Heading,
  Spinner,
  Center,
  Box,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useState } from 'react';
import testData from './testData';

function page() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadClick = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/postConvertToCsv',
        testData,
        {
          responseType: 'blob', // Ustawienie typu odpowiedzi na blob (dane binarne)
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'plik.csv');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSecondaryAction = async () => {
    const textareaValue = document.getElementById('myTextarea').value;
    const scrap = JSON.parse(textareaValue);
    setIsLoading(true);
    onClose();
    try {
      const response = await axios.post(
        'http://localhost:3000/api/scrapData',
        scrap
      );
      console.log(response.data);
      setResult(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box w="100%">
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              <Textarea
                id="myTextarea"
                placeholder="Here is a sample placeholder"
              />
            </p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={handleSecondaryAction}>
              Scrap
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {isLoading ? (
        <Box>
          <Center>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        </Box>
      ) : null}

      {!result.name ? null : (
        <Box>
          <Heading as="h1" size="md" pt="1em">
            {result.name}
          </Heading>
          <Flex>
            <Box w="50%">lastModifiedDate: {result.lastModifiedDate}</Box>
            <Spacer />
            <Box onClick={handleDownloadClick} cursor="pointer">
              <DownloadIcon />
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
}

export default page;
