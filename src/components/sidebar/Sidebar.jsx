import { Box } from "@chakra-ui/layout";
import WeekDeadline from "./weekDeadline";

const Sidebar = () => {

  return (
    <Box 
      p={4}
      mr={{base: 0, md: 12}}
      w={{base: 'full', md: 'md'}}
      maxWidth="2xl" 
    >
      <WeekDeadline />
    </Box>
    
  )
};

export default Sidebar;