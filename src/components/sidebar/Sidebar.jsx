import { Box, VStack } from "@chakra-ui/layout";
import MyCalendar from "../calendar/Calendar";
import WeekDeadline from "./weekDeadline";


const Sidebar = () => {

  return (
    <Box 
      p={4}
      mr={{base: 0, md: 12}}
      w={{base: 'full', md: 'lg'}}
      maxWidth="2xl" 
    >
      <VStack spacing={20}>
        <WeekDeadline />
        <MyCalendar />
      </VStack>
    </Box>
    
  )
};

export default Sidebar;