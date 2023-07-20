import { Box, Text, Stack } from "@chakra-ui/react";

export function DailyMenu({ day }) {
  return (
    <Box>
      <Text mb="8px" fontSize="xl">
        {day.dayOfTheWeek}
      </Text>
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
