/* eslint-disable import/no-extraneous-dependencies */
import {
  Flex, Heading, IconButton, Spacer, VStack, useColorMode,
} from '@chakra-ui/react';
import './App.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import Header from './components/Header';
import Social from './components/Social';
import Profile from './components/Profile';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading as="h1" size="3rem" noOfLines={1}>
          Reveday | WEDDING CINEMATOGRAPHY
        </Heading>
        <Spacer />
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode} />
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>

  );
}

export default App;
