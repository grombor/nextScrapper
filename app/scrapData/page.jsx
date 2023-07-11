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

    // const data = {
    //   "url": "https://www.example.com",
    //   "selectors": [
    //     {
    //       "uuid": "d039a4cb-c61d-4b78-b689-d3ac8d1dd188",
    //       "name": "Header",
    //       "selector": "h1",
    //       "isChecked": true
    //     },
    //     {
    //       "uuid": "e62de0ab-79ae-4c80-ac2a-b6a9986090f5",
    //       "name": "Paragraph",
    //       "selector": "p",
    //       "isChecked": false
    //     }
    //   ]
    // }
    

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