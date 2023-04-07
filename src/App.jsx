/* eslint-disable import/no-extraneous-dependencies */
import {
  Flex, Heading, IconButton, Spacer, VStack, useColorMode,
} from '@chakra-ui/react';
import './App.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import Header from './components/Header';
import Social from './components/Social';
import Profile from './components/Profile';

import logo from './assets/logo.png';
import NavBar from './components/NavBar';

function App() {
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading as="img" size="3rem" noOfLines={1} mb="4" src={logo} />
        <NavBar />
        <Spacer />
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>

  );
}

export default App;
