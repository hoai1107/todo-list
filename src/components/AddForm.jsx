import { Button } from "@chakra-ui/button";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";
import AddModal from "./AddModal";

const AddForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  function onSubmit(data) {
    dispatch(addTask(data.task,new Date(data.deadline).toISOString()));
    onClose();
  }

  return (
    <AddModal
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormControl isInvalid={errors.task}>
            <FormLabel htmlFor="task">
              Task discription
            </FormLabel>
            <Input
              type="text"
              id="task"
              placeholder="What to do ..."
              {...register("task", {required: "This is required!"})}
            />
            <FormErrorMessage>
              {errors.task && <span>{errors.task.message}</span>}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.deadline}>
            <FormLabel htmlFor="deadline">
              Deadline
            </FormLabel>
            <Input
              type="date"
              id="deadline"
              {...register("deadline", {required: "This is required!"})}
            />
            <FormErrorMessage>
              {errors.deadline && <span>{errors.deadline.message}</span>}
            </FormErrorMessage>
          </FormControl>

          <Button colorScheme="teal" size="lg" type="submit" my={4}>
            Add task
          </Button>
        </VStack>
      </form>
    </AddModal>
  )
};

export default AddForm;