import {
  ChakraProvider,
  ListItem,
  UnorderedList,
  Box,
  Text,
  Stack,
  Checkbox,
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
          description:
            "pollo teriyaki al horno, con arroz, tomate cherry y mango",
        },
        {
          name: "Cena",
          description:
            "ensalada de aguacate, tomate y paraguayo con pollo rebozado",
        },
      ],
    },
    {
      dayOfTheWeek: "Martes",
      meals: [
        {
          name: "Desayuno",
          description: "tostada con mantequilla y marmelada",
        },
        {
          name: "Comida",
          description: "hamburguesa de angus con mango y queso chedar fundido",
        },
        {
          name: "Cena",
          description: "ensalada de atun, queso, tomate y maiz",
        },
      ],
    },
    {
      dayOfTheWeek: "Miercoles",
      meals: [
        {
          name: "Desayuno",
          description: "galletas de avena y manzana con kiwi y naranja",
        },
        {
          name: "Comida",
          description:
            "pizza marguerita con albahaca, tomate cherry y aceitunas",
        },
        {
          name: "Cena",
          description: "pavo con calabacin y pina al horno",
        },
      ],
    },
    {
      dayOfTheWeek: "Jueves",
      meals: [
        {
          name: "Desayuno",
          description: "leche con cereales y nueces",
        },
        {
          name: "Comida",
          description: "pasta con salsa bolonesa, tomate cherry y parmesano",
        },
        {
          name: "Cena",
          description: "patatas, zanahorias, champinones y calabacin al horno",
        },
      ],
    },
    {
      dayOfTheWeek: "Viernes",
      meals: [
        {
          name: "Desayuno",
          description: "tostada con tomate",
        },
        {
          name: "Comida",
          description: "pizza barbacoa",
        },
        {
          name: "Cena",
          description: "patatas, zanahorias, broccoli y pimiento al horno",
        },
      ],
    },
    {
      dayOfTheWeek: "Sabado",
      meals: [
        {
          name: "Desayuno",
          description: "tostada con mantequilla y marmelada",
        },
        {
          name: "Comida",
          description: "parmigiana",
        },
        {
          name: "Cena",
          description: "picoteo de gazpacho, bocadillo jamon, hummus y queso",
        },
      ],
    },
    {
      dayOfTheWeek: "Domingo",
      meals: [
        {
          name: "Desayuno",
          description: "bizcocho o brownie con yogur griego",
        },
        {
          name: "Comida",
          description: "broccoli gratinado",
        },
        {
          name: "Cena",
          description:
            "picoteo de gazpacho, bocadillo pollo rebozado, hummus y aceitunas",
        },
      ],
    },
  ];
  
  return (
    <ChakraProvider>
      <Box w="370px" m="auto" p={4} align="left">
        {/* title description container */}
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
        {/* weekdays container */}
        <Box mb="32px">
          {days.map((day) => (
            <DailyMenu day={day}></DailyMenu>
          ))}
        </Box>
        <Box>
          <Text mb="16px" fontSize="2xl">
            Lista de la compra
          </Text>
          <Box>
            <Stack spacing={1} direction="column">
              <Checkbox>Calabacin</Checkbox>
              <Checkbox>Pimientos</Checkbox>
            </Stack>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
