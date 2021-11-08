import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useRef } from "react";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { useDispatch } from "react-redux";
import { editTask } from "../store/taskSlice";
import { useForm } from "react-hook-form";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { VStack } from "@chakra-ui/layout";

const EditModal = ({isOpen, onClose, task, id, deadline}) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }} = useForm();

  function handleEdit(data){
    const { task, date } = data;
    dispatch(editTask(id, task, new Date(date).toISOString()));
    onClose();
  };

  return (
    <Modal size='lg' isOpen={isOpen} onClose={onClose} initialFocusRef={inputRef} isCentered>
      <ModalOverlay />
        <ModalContent p={4}>
          <ModalHeader>Edit Task</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(handleEdit)}>
            <ModalBody>
              <VStack spacing={4}>
                <FormControl isInvalid={errors.task}>
                  <FormLabel htmlFor="task_edit">
                    Task description
                  </FormLabel>
                  <Input
                    id="task_edit"
                    type="text"
                    defaultValue={task}
                    ref={inputRef}
                    {...register("task", {required:"This is required!"})}
                  />
                  <FormErrorMessage>
                    {errors.task && <span>{errors.task.message}</span>}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.date}>
                  <FormLabel htmlFor="deadline_edit">
                    Deadline
                  </FormLabel>
                  <Input
                    id="deadline_edit"
                    type="date"
                    defaultValue={
                      typeof deadline === 'object' ?
                      deadline.toISOString().substr(0, 10) : deadline.substr(0,10)
                      }
                    {...register("date", {required:"This is required!"})}
                  />
                  <FormErrorMessage>
                    {errors.date && <span>{errors.date.message}</span>}
                  </FormErrorMessage>
                </FormControl>
              </VStack>
            </ModalBody>
            
            <ModalFooter>
              <Button colorScheme="blue" size="md" type="submit">
                Save
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
    </Modal>
  )
};

export default EditModal;