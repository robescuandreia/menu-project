import { Box, Text, Stack, Image } from "@chakra-ui/react";

export function DailyMenu({ day }) {
  return (
    <Box>
      <Text mb="8px" fontSize="xl">
        {day.dayOfTheWeek}
      </Text>
      <Box boxSize="sm">
        <Image src={day.image} />
      </Box>
      <Stack mb="16px" spacing={1}>
        {day.meals.map(({ name, description }) => (
          <Text fontSize="sm">
            <strong style={{ fontWeight: 600 }}>{name}:</strong> {description}
          </Text>
        ))}
      </Stack>
    </Box>
  );
}
