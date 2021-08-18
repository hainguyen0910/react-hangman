import React from 'react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

function SelectedLetters({
  selectedLetters,
  playAgain,
  result,
  viewResult,
  currentMode,
}) {
  return (
    <Flex
      h="100%"
      flexDir="column"
      justifyContent="space-between"
      color="white"
      mt="10"
      p="10"
    >
      <Flex flexDir="column" alignItems="center">
        <Heading as="h3" size="md" textTransform="uppercase">
          Wrong Letters
        </Heading>
        <Flex flexWrap="wrap" mt="10">
          {selectedLetters?.length === 0 ? (
            <Text mr="3" fontSize="20px" textAlign="center">
              No wrong letters !!!
            </Text>
          ) : (
            selectedLetters?.map((item, index) => (
              <Text
                key={index}
                w="30px"
                h="50px"
                mr="3"
                fontSize="30px"
                borderBottom="5px solid white"
              >
                {item}
              </Text>
            ))
          )}
        </Flex>
      </Flex>
      {currentMode === 'dark' && (
        <Box mb="5">
          <Button
            mr="3"
            variant="outline"
            colorScheme="messenger"
            disabled={result === '' && true}
            onClick={viewResult}
          >
            Result
          </Button>
          <Button colorScheme="teal" onClick={playAgain}>
            Play Again
          </Button>
        </Box>
      )}
    </Flex>
  );
}

export default SelectedLetters;
