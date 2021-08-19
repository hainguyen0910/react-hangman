import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

function Word({ word, correctLetters }) {
  return (
    <Flex mt="10">
      {word?.split('').map((item, index) => (
        <Text
          color="white"
          key={index}
          w="30px"
          h="50px"
          mr="3"
          display="inline-flex"
          fontSize="30px"
          alignItems="center"
          justifyContent="center"
          borderBottom="5px solid white"
        >
          {correctLetters?.includes(item) ? (
            <span>{item.toUpperCase()}</span>
          ) : (
            ''
          )}
        </Text>
      ))}
    </Flex>
  );
}

export default Word;
