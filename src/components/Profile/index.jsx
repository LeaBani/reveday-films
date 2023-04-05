import {
  Heading, Text, Box, Flex, useMediaQuery, Icon,
} from '@chakra-ui/react';
import { DiAndroid } from 'react-icons/di';

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)');

  return (
    <Flex
      direction={isNotSmallerScreen ? 'row' : 'column'}
      w="100%"
      maxWidth={{
        base: '100vh', md: '130vh', lg: '130vh', xl: '130vh',
      }}
    >
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" fontSize="56">
          7 +
        </Heading>
        <Text fontSize="24" color="gray.400">
          Years of XP
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="24">Videaste de mariage</Text>
        <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt="8">
          <Flex rounded="20" direction="column" mt="4" bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: 'teal.400' }}>
            <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
            <Text color="white" p="4" fontSize="x1" fontWeight="semibold">App</Text>
          </Flex>
          <Flex rounded="20" direction="column" mt="4" bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: 'teal.400' }}>
            <Text color="white" p="4" fontSize="x1" fontWeight="semibold">App 2</Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
