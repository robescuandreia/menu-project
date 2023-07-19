import {
  ChakraProvider,
  ListItem,
  UnorderedList,
  Box,
  Text,
  Stack,
} from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Box w="370px" m="auto" p={4} align="left">
        <Box mb="16px">
          <Text mb="8px" align="center" fontSize="4xl">
            Menu Semanal
          </Text>
          <UnorderedList mb="16px">
            <ListItem>
              <Text fontSize="md">Tiempo de preparacion: menos de 15 min</Text>
            </ListItem>
            <ListItem>
              <Text fontSize="md">
                Comer saludable: platos frescos y al horno
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="md">Pocos ingredientes: maximo 5 per plato</Text>
            </ListItem>
          </UnorderedList>
          <Text fontSize="sm">
            El menu semanal definitivo, para los que no quieren perder el tiempo
            en la cocina. Equilibrado y facil, con ingredientes que encuentras
            en cualquier supermercado. Nuestra filosfofia: Comer pizza no hara
            que engordes. No hacer deporte si.
          </Text>
        </Box>
        <Box>
          <Box>
            <Text mb="8px" fontSize="xl">
              Lunes
            </Text>
            <Stack spacing={1}>
              <Text fontSize="sm">
                <strong style={{ fontWeight: 600 }}>Desayuno:</strong> yogur
                griego con nueces, almendras y platano
              </Text>
              <Text fontSize="sm">
                <strong style={{ fontWeight: 600 }}>Comida:</strong> hamburguesa
                de angus con mango y queso chedar fundido
              </Text>
              <Text fontSize="sm">
                <strong style={{ fontWeight: 600 }}>Cena:</strong> Ensalada de
                atun con tomate y maiz
              </Text>
            </Stack>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
