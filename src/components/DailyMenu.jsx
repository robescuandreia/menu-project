import { Box, Text, Stack, Image } from "@chakra-ui/react";

export function DailyMenu({ day }) {
  return (
    <Box>
      <Text mb="8px" fontSize="xl">
        {day.dayOfTheWeek}
      </Text>
      <Box boxSize="sm">
        <Image src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d7f0a66959f544f5b885f3bd993f072f/BFV43733_ChowMein4Ways_FB1080SQ.jpg" />
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
