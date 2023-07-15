import { ChakraProvider, Button } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Button colorScheme="blue">Button</Button>
    </ChakraProvider>
  );
}

export default App;
