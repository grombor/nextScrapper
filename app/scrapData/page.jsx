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
} from '@chakra-ui/react'
import axios from 'axios';
import { useState } from 'react';

function page() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [result, setResult] = useState({})

  const handleSecondaryAction = async () => {
    const textareaValue = document.getElementById('myTextarea').value;
    const scrap = JSON.parse(textareaValue);
    setResult(scrap);
    onClose();
    try {
      const response = await axios.post(
        'http://localhost:3000/api/scrapData',
        scrap
      );
      console.log(scrap)
      // const newScrap = response.data;
      // setResult(newScrap)
      // console.log(result)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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

      {/* <Heading as='h1' size='4xl'></Heading>

      <OrderedList>
        { Array.from(result).map((item) => <ListItem key={item.uuid}>{item.name}:&nbsp;{item.value}</ListItem>) }
      </OrderedList> */}
    </>
  );
}

export default page;
