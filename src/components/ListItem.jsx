import { Button, ButtonGroup } from "@chakra-ui/button"
import { Checkbox } from "@chakra-ui/checkbox"
import { useDisclosure } from "@chakra-ui/hooks";
import { Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/layout";
import { isAfter, parseISO } from "date-fns";
import { MdDelete, MdEdit } from "react-icons/md"
import { useDispatch } from "react-redux";
import { toggleCompleted, deleteTask } from "../store/taskSlice";
import EditModal from "./EditModal";

const ListItem = (props) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const doable = isAfter(parseISO(props.deadline), new Date());

  return(
    <Flex 
      alignItems="center" 
      border="1px"
      borderColor="gray.200"
      w="full"
      p={[2,4]}
      borderRadius="lg"
      boxShadow="xl"
      bgColor={!doable && "gray.100"}
    > 
      <HStack spacing={4}>
        <Checkbox
          isDisabled={!doable}
          colorScheme="green" 
          size="lg"
          isChecked={props.completed}
          onChange={(e) => dispatch(toggleCompleted(props.id, e.target.checked))}
        />
        <VStack alignItems="flex-start" px={4}>
          <Text fontSize="lg">{props.task}</Text>
          <Text as='i'>
            <span style={{fontStyle: 'normal'}}>⏰ </span>
            Deadline: {new Date(props.deadline).toLocaleString('en-US',{year: 'numeric', month: 'long', day: 'numeric' })}
          </Text>
        </VStack>
        
      </HStack>
      <Spacer/>
      <HStack ml="auto">
        <ButtonGroup variant="solid" size="xs">

          <Button leftIcon={<MdEdit/>} colorScheme="blue" onClick={onOpen}>
            Edit
            <EditModal
              task={props.task}
              id={props.id}
              isOpen={isOpen}
              onClose={onClose}
              deadline={props.deadline}
            />
          </Button>

          <Button leftIcon={<MdDelete/>} colorScheme="red"
            onClick={() => dispatch(deleteTask(props.id))}
          >
            Delete
          </Button>

        </ButtonGroup>
      </HStack>
    </Flex>
  )
};

export default ListItem;