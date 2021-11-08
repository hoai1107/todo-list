import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Flex, Box, Text } from "@chakra-ui/layout";

const AddModal = (props) => {
  return (
    <Flex w="full" justifyContent="center" mb={8}>
      <Modal size='lg' 
        isCentered 
        isOpen={props.isOpen}
        onOpen={props.onOpen}
        onClose={props.onClose}
      >
        <ModalOverlay />
        <ModalContent p={4}>
          <ModalHeader>Add Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {props.children}
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box
        as="button"
        p={4} 
        onClick={props.onOpen} 
        w={['sm',null,'lg']}
        borderRadius="15px"
        sx={{
          "background-image": "linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%)",
          "background-size": "200% auto",
          "transition": "0.5s",

          "&:hover":{
            "background-position":"right center"
          }
        }}
      >
        <Text fontSize='xl' fontWeight="bold" color="white" >
            ADD TASK
        </Text>
      </Box>
    </Flex>
  )
};

export default AddModal;
