'use client'

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
  } from '@chakra-ui/react'
import axios from 'axios';


  function page() {
    const { isOpen, onOpen, onClose } = useDisclosure()


    const handleSecondaryAction = async () => {
        const textareaValue = document.getElementById('myTextarea').value;
        const scrap = JSON.parse(textareaValue);
        try {
          const response = await axios.post('http://localhost:3000/api/scrapData', scrap);
            console.log(response.data);
        } catch (error) {
            console.log(error)
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
              <Textarea id="myTextarea" placeholder='Here is a sample placeholder' />
              </p>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost' onClick={handleSecondaryAction}>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default page