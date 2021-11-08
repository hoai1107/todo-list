import { Center, GridItem, SimpleGrid, Text } from "@chakra-ui/layout";
import { useSelector } from "react-redux";
import { FILTER_LIST } from "../store/filterSlice";
import ListItem from "./ListItem";

const List = () => {
  var tasks = useSelector(state => state.tasks);
  var filter = useSelector(state => state.filter);

  if (tasks.length === 0){
    return (
      <Center pt={20} >
        <Text 
          color="gray.400" 
          sx={{"font-family": "'Acme', sans-serif"}}
          fontSize="5xl"
        >Nothing to do...  ( ﾉ ﾟｰﾟ)ﾉ</Text>
      </Center>
    )
  }

  if(filter === FILTER_LIST.COMPLETED){
    tasks = tasks.filter(task => task.completed === true);
  }else if(filter === FILTER_LIST.INCOMPLETED){
    tasks = tasks.filter(task => task.completed === false);
  }
  
  return (
    <SimpleGrid 
      columns={[1,2]} 
      spacingX={20}
      spacingY={12}
      minChildWidth="24rem"
      px={[0,8]}
    >
      {tasks.map(task => (
        <GridItem colSpan={1}>
          <ListItem key={task.id} id={task.id} task={task.title} completed={task.completed}
            deadline={task.deadline}
          />
        </GridItem>   
      ))}
    </SimpleGrid>
  )
};

export default List;
