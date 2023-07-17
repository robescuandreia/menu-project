import {
  ChakraProvider,
  Button,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <div>
        <h1>Menu Semanal</h1>
        <h2>
          <UnorderedList>
            <ListItem>Tiempo de preparacion: menos de 15 minutos </ListItem>
            <ListItem>Comer saludable: platos frescos y al horno</ListItem>
            <ListItem>Pocos ingredientes: maximo 5 per plato</ListItem>
          </UnorderedList>
        </h2>
        <h3>
          El menu semanal definitivo, para los que no quieren perder el tiempo
          en la cocina. Equilibrado y facil, con ingredientes que encuentras en
          cualquier supermercado. Nuestra filosfofia: Comer pizza no hara que
          engordes. No hacer deporte si.{" "}
        </h3>
      </div>
      <Button colorScheme="blue">Button</Button>
    </ChakraProvider>
  );
}

export default App;
