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

// days - array of objects
//  dayOfTheWeek - string
//  image - string
//  meals - array of objects
//    name - string
//    description - string
//    ingredients - array of objects
//      name - string
//      category - string

// categories - array of objects
//  name - string
//  uniqueIngredients - array of strings

function App() {
  const days = [
    {
      dayOfTheWeek: "Lunes",
      image:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d7f0a66959f544f5b885f3bd993f072f/BFV43733_ChowMein4Ways_FB1080SQ.jpg",
      meals: [
        {
          name: "Desayuno",
          description: "tostada con tomate",
          ingredients: [
            {
              name: "pan",
              category: "panaderia y pasteleria",
            },
            { name: "tomates", category: "fruta y verdura" },
          ],
        },
        {
          name: "Comida",
          description:
            "pollo teriyaki al horno, con arroz, tomate cherry y mango",
          ingredients: [
            {
              name: "pechuga de pollo",
              category: "carne",
            },
            { name: "salsa teriyaki", category: "aceite, especias y salsas" },
            {
              name: "arroz",
              category: "arroz, legumbres y pasta",
            },
            { name: "tomate cherry", category: "fruta y verdura" },
            { name: "mango", category: "fruta y verdura" },
          ],
        },
        {
          name: "Cena",
          description:
            "ensalada de aguacate, tomate y paraguayo con pollo rebozado",
          ingredients: [
            {
              name: "lechuga",
              category: "fruta y verdura",
            },
            { name: "tomates", category: "fruta y verdura" },
            {
              name: "aguacates",
              category: "fruta y verdura",
            },
            { name: "pechuga de pollo", category: "carne" },
            { name: "paraguayos", category: "fruta y verdura" },
            { name: "huevos", category: "huevos, leche y mantequilla" },
            { name: "harina", category: "panaderia y pasteleria" },
            { name: "pan rallado", category: "panaderia y pasteleria" },
          ],
        },
      ],
    },
    {
      dayOfTheWeek: "Martes",
      image:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d7f0a66959f544f5b885f3bd993f072f/BFV43733_ChowMein4Ways_FB1080SQ.jpg",

      meals: [
        {
          name: "Desayuno",
          description: "tostada con mantequilla y marmelada",
          ingredients: [
            {
              name: "pan",
              category: "panaderia y pasteleria",
            },
            { name: "mantequilla", category: "huevos, leche y mantequilla" },
            { name: "marmelada", category: "azucar, caramelos y chocolate" },
          ],
        },
        {
          name: "Comida",
          description: "hamburguesa de angus con mango y queso chedar fundido",
          ingredients: [
            {
              name: "pan hamburguesa",
              category: "panaderia y pasteleria",
            },
            { name: "hamburguesa angus", category: "carne" },
            { name: "mango", category: "fruta y verdura" },
            { name: "queso chedar", category: "charcuteria y quesos" },
          ],
        },
        {
          name: "Cena",
          description: "ensalada de atun, queso, tomate y maiz",
          ingredients: [
            {
              name: "lechuga",
              category: "panaderia y pasteleria",
            },
            { name: "tomates", category: "fruta y verdura" },
            { name: "atun", category: "conservas, caldos y cremas" },
            { name: "queso", category: "charcuteria y quesos" },
            { name: "maiz", category: "conservas, caldos y cremas" },
          ],
        },
      ],
    },
    {
      dayOfTheWeek: "Miercoles",
      image:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d7f0a66959f544f5b885f3bd993f072f/BFV43733_ChowMein4Ways_FB1080SQ.jpg",

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
      image:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d7f0a66959f544f5b885f3bd993f072f/BFV43733_ChowMein4Ways_FB1080SQ.jpg",

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
      image:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d7f0a66959f544f5b885f3bd993f072f/BFV43733_ChowMein4Ways_FB1080SQ.jpg",

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
      image:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d7f0a66959f544f5b885f3bd993f072f/BFV43733_ChowMein4Ways_FB1080SQ.jpg",

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
      image:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d7f0a66959f544f5b885f3bd993f072f/BFV43733_ChowMein4Ways_FB1080SQ.jpg",

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

  let ingredientList = [];
  for (let i = 0; i < days.length; i++) {
    const day = days[i];
    const meals = day.meals;
    for (let j = 0; j < meals.length; j++) {
      const meal = meals[j];
      const ingredients = meal.ingredients;
      for (let k = 0; k < ingredients.length; k++) {
        const ingredient = ingredients[k];
        ingredientList.push(ingredient);
      }
    }
  }
  let uniqueIngredients = [...new Set(ingredientList)];

  return (
    <ChakraProvider>
      <Box p={4} align="left">
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
              {uniqueIngredients.map((uniqueIngredient) => (
                <Checkbox>{uniqueIngredient}</Checkbox>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
