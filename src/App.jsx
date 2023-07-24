import {
  ChakraProvider,
  ListItem,
  UnorderedList,
  Box,
  Text,
} from "@chakra-ui/react";
import "./App.css";
import { DailyMenu } from "./components/DailyMenu";

function App() {
  const days = [
    {
      dayOfTheWeek: "Lunes",
      meals: [
        {
          name: "Desayuno",
          description: "tostada con tomate",
        },
        {
          name: "Comida",
          description: "pollo teryaki con arroz, tomate cherry y mango",
        },
        {
          name: "Cena",
          description: "jamon serrano con ensalada de aguacate, tomate y paraguayo",
        },
      ],
    },
    {
      dayOfTheWeek: "Martes",
      meals: [
        {
          name: "Desayuno",
          description: "yogur griego con nueces, almendras y platano",
        },
        {
          name: "Comida",
          description: "hamburguesa de angus con mango y queso chedar fundido",
        },
        {
          name: "Cena",
          description: "ensalada de atun con queso, tomate y maiz",
        },
      ],
    },
    {
      dayOfTheWeek: "Miercoles",
      meals: [
        {
          name: "Desayuno",
          description: "yogur griego con nueces, almendras y platano",
        },
        {
          name: "Comida",
          description: "hamburguesa de angus con mango y queso chedar fundido",
        },
        {
          name: "Cena",
          description: "ensalada de atun con tomate y maiz",
        },
      ],
    },
  ];
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
          {days.map((day) => (
            <DailyMenu day={day}></DailyMenu>
          ))}
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
