import { Heading, Box } from "@chakra-ui/layout";


const Header = () => {
  return (
    <Box 
      textAlign="center" 
      p={20} 
      mb={20}
      bgGradient="linear(to-l,#2a5298,#1e3c72,#2a5298)"
    >
      <Heading
        color="white"
        size='3xl'
      >To-do List</Heading>
      <span style={{fontSize: '3rem'}} role="img">🚀</span>
    </Box>
  )
};

export default Header;