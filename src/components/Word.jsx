import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

function Word({ word, correctLetters }) {
  return (
    <Flex mt="10">
      {word?.split('').map((item, index) => (
        <Box
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
            <Text color="green.500">{item.toUpperCase()}</Text>
          ) : (
            ''
          )}
        </Box>
      ))}
    </Flex>
  );
}

export default Word;
