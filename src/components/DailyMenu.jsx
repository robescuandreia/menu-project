import { Box, Text, Stack, Image } from "@chakra-ui/react";

export function DailyMenu({ day }) {
  return (
    <Box>
      <Text mb="8px" fontSize="xl">
        {day.dayOfTheWeek}
      </Text>
      <Box mb="16px">
        <Image
          src={day.image}
          height="160px"
          width="-webkit-fill-available"
          objectFit="cover"
          borderRadius="15px"
        />
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
