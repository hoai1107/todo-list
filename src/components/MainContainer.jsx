import { Container } from "@chakra-ui/layout"
import Filter from "./Filter";
import List from "./List";
import AddForm from "./AddForm";

const MainConatainer = () => {
  return (
    <Container maxWidth="container.xl" pb={20}>
      <AddForm />
      <Filter />
      <List/>
    </Container>
  )
};

export default MainConatainer;