import { Button } from "@chakra-ui/button";
import { SimpleGrid, Text, VStack } from "@chakra-ui/layout"
import { useDispatch, useSelector } from "react-redux";
import { FILTER_LIST, toggleFilter } from "../store/filterSlice";

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <VStack w="full" alignItems="center" mb={8}>
      <SimpleGrid columns={{base: 1, sm: 3}} spacing={4} w={{base: 'sm', md: 'lg'}}>
        {Object.values(FILTER_LIST).map(type => (
          <Button
            colorScheme="teal"
            variant={type === filter ? "solid" : "outline"}
            onClick={() => dispatch(toggleFilter(type))}
          >
            <Text fontSize={["md",null,"lg"]} sx={{"font-family": "'Acme', sans-serif"}}>
              {type}
            </Text>
          </Button>
        ))}
      </SimpleGrid>
    </VStack>
    
  )
};

export default Filter;