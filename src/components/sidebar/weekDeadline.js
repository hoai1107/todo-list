import { Heading, List, ListItem, Text, Box } from "@chakra-ui/layout"
import { formatDistance, isAfter, isThisWeek, parseISO } from "date-fns";
import { useSelector } from "react-redux";

function calculateTimeLeft(deadline){
  let res = formatDistance(deadline, new Date());
  return res;
}

const WeekDeadline = () => {
  let tasks = useSelector(state => state.tasks);

  tasks = tasks
  .map(task => {
    return {...task, deadline: parseISO(task.deadline)};
  })

  console.log(tasks);

  tasks = tasks.filter(task => task.completed === false && isThisWeek(task.deadline, {weekStartsOn: 1}) && isAfter(task.deadline, new Date()))


  return (
    <Box shadow="lg" p={8} bgColor="gray.100">
      <Heading as="u" sx={{
        "color": "#C37B89"
      }}>This week's deadlines</Heading>

      <List spacing={4} mt={4}>
        {
          tasks.map(task => (
            <ListItem>
              <Text fontSize={20}>✨{task.title}{` (${calculateTimeLeft(task.deadline)} left)`}</Text>
            </ListItem>
          ))
        }
      </List>
    </Box>
  )
};

export default WeekDeadline;



