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
          ingredients: ["pan", "tomates"],
        },
        {
          name: "Comida",
          description:
            "pollo teriyaki al horno, con arroz, tomate cherry y mango",
          ingredients: [
            "pechuga de pollo",
            "salsa teriyaki",
            "arroz",
            "tomate cherry",
            "mango",
          ],
        },
        {
          name: "Cena",
          description:
            "ensalada de aguacate, tomate y paraguayo con pollo rebozado",
          ingredients: [
            "lechuga",
            "tomates",
            "aguacates",
            "pechuga de pollo",
            "paraguayos",
            "huevos",
            "harina",
            "pan rallado",
          ],
        },
      ],
    },
    {
      dayOfTheWeek: "Martes",
      meals: [
        {
          name: "Desayuno",
          description: "tostada con mantequilla y marmelada",
          ingredients: ["pan", "mantequilla", "marmelada"],
        },
        {
          name: "Comida",
          description: "hamburguesa de angus con mango y queso chedar fundido",
          ingredients: [
            "pan hamburguesa",
            "hamburguesa angus",
            "mango",
            "queso chedar",
          ],
        },
        {
          name: "Cena",
          description: "ensalada de atun, queso, tomate y maiz",
          ingredients: ["lechuga", "tomates", "atun", "queso", "maiz"],
        },
      ],
    },
    {
      dayOfTheWeek: "Miercoles",
      meals: [
        {
          name: "Desayuno",
          description: "galletas de avena y manzana con kiwi y naranja",
          ingredients: [
            "copos de avena",
            "manzanas golden",
            "kiwis",
            "naranjas",
            "aceite girasol",
            "esencia vainilla",
            "azucar",
            "harina",
            "levadura",
          ],
        },
        {
          name: "Comida",
          description:
            "pizza marguerita con albahaca, tomate cherry y aceitunas",
          ingredients: [
            "pizza marguerita",
            "tomate cherry",
            "albahaca",
            "aceitunas",
            "ketchup",
          ],
        },
        {
          name: "Cena",
          description: "pavo con calabacin y pina al horno",
          ingredients: ["pavo", "calabacines", "pina", "tomate frito"],
        },
      ],
    },
    {
      dayOfTheWeek: "Jueves",
      meals: [
        {
          name: "Desayuno",
          description: "leche con cereales y nueces",
          ingredients: [
            "leche",
            "bebida avena",
            "copos de avena",
            "nueces",
            "cereales choco",
            "corn flakes",
          ],
        },
        {
          name: "Comida",
          description: "pasta con salsa bolonesa, tomate cherry y parmesano",
          ingredients: [
            "pasta",
            "salsa bolonesa",
            "tomate cherry",
            "parmesano",
          ],
        },
        {
          name: "Cena",
          description: "patatas, zanahorias, champinones y calabacin al horno",
          ingredients: ["patatas", "zanahorias", "champinones", "calabacines"],
        },
      ],
    },
    {
      dayOfTheWeek: "Viernes",
      meals: [
        {
          name: "Desayuno",
          description: "tostada con tomate",
          ingredients: ["pan", "tomates"],
        },
        {
          name: "Comida",
          description: "pizza barbacoa",
          ingredients: ["pizza barbacoa", "ketchup"],
        },
        {
          name: "Cena",
          description: "patatas, zanahorias, broccoli y pimiento al horno",
          ingredients: ["patatas", "zanahorias", "broccoli", "pimientos"],
        },
      ],
    },
    {
      dayOfTheWeek: "Sabado",
      meals: [
        {
          name: "Desayuno",
          description: "tostada con mantequilla y marmelada",
          ingredients: ["pan", "mantequilla", "marmelada"],
        },
        {
          name: "Comida",
          description: "parmigiana",
          ingredients: [
            "berenjena",
            "albahaca",
            "salsa de tomate",
            "mozarella",
            "harina",
            "parmesano",
          ],
        },
        {
          name: "Cena",
          description: "picoteo de gazpacho, bocadillo jamon, hummus y queso",
          ingredients: ["pan", "gazpacho", "hummus", "queso", "jamon serrano"],
        },
      ],
    },
    {
      dayOfTheWeek: "Domingo",
      meals: [
        {
          name: "Desayuno",
          description: "bizcocho con yogur griego",
          ingredients: [
            "yogur griego",
            "harina",
            "levadura",
            "aceite de girasol",
            "limon",
            "naranjas",
            "frutos del bosque congelados",
            "pepitas de chocolate",
          ],
        },
        {
          name: "Comida",
          description: "broccoli gratinado",
          ingredients: ["broccoli", "queso"],
        },
        {
          name: "Cena",
          description:
            "picoteo de gazpacho, bocadillo pollo rebozado, hummus y aceitunas",
          ingredients: [
            "pan",
            "gazpacho",
            "hummus",
            "aceitunas",
            "pechuga de pollo",
            "huevos",
            "harina",
            "pan rallado",
          ],
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
