import {
  Heading, Text, Box, Flex, useMediaQuery,
} from '@chakra-ui/react';

function Profile() {
  const { isNotSmallerScreen } = useMediaQuery('(min-width:600px)');

  return (
    <Flex
      direction={isNotSmallerScreen ? 'row' : 'column'}
      w="100%"
      maxWidth={{
        base: '100vh', md: '130vh', lg: '130vh', xl: '130vh',
      }}
    >
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4x1">
          7 +
        </Heading>
        <Text fontSize="2x1" color="gray.400">
          Years of XP
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16" />
    </Flex>
  );
}

export default Profile;
