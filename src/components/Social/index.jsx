/* eslint-disable import/no-extraneous-dependencies */
import { HStack, Icon } from '@chakra-ui/react';
import { FaHeart, FaInstagram, FaVimeo } from 'react-icons/fa';

function Social() {
  return (
    <HStack spacing={24}>
      <Icon as={FaInstagram} boxSize={50} />
      <Icon as={FaVimeo} boxSize={50} />
      <Icon as={FaHeart} boxSize={50} />
    </HStack>
  );
}

export default Social;
