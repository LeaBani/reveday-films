import {
  Circle, Stack, useColorMode, useMediaQuery, Flex, Box, Text, Button, Image,
} from '@chakra-ui/react';

import profile from '../../assets/profile.jpg';

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const [isNotSmallerScreen] = useMediaQuery('(min-width: 800px)');

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity={0.1}
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? 'row' : 'column'}
        spacing="200px"
        p={isNotSmallerScreen ? '32' : '0'}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? '0' : '16'} align="flex-start">
          <Text fontSize="2rem" fontWeight="semiBold">Bonjour, je suis</Text>
          <Text fontSize="5rem" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Favian Ramos</Text>
          <Text fontSize="1rem" color={isDark ? 'gray.200' : 'gray.500'}>Irure laborum tempor do excepteur do consequat sint id est sit veniam nisi fugiat. Amet amet non id quis. Nulla irure id proident sit laborum qui id laboris deserunt id ut et cillum id.</Text>
          <Button mt={8} colorScheme="blue" onClick={() => window.open('https://test.com')}>Contactez-moi</Button>
          <Image alignSelf="center" mt={isNotSmallerScreen ? '0' : '12'} mb={isNotSmallerScreen ? '0' : '12'} borderRadius="full" backgroundColor="transparent" boxShadow="lg" boxSize="300px" src={profile} />
        </Box>
      </Flex>
    </Stack>
  );
}

export default Header;
