import React from 'react';
import { Box, Heading, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

function Rule() {
  return (
    <Box mt="10" p="10" fontSize="16px">
      <Heading as="h3" size="md" textTransform="uppercase">
        Rule
      </Heading>
      <List spacing={3} textAlign="left" mt="10">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          There will be a random word chosen. You will have to guess the letters
          in the word.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          You only have a total of 6 guesses per game.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          You only win when correctly guessing the selected word without the
          number of guesses being more than 6.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          The game only begins when night falls. Please keep this in mind as
          this is a{' '}
          <Text fontWeight="600" color="green.500" display="inline">
            FEATURE
          </Text>
          ,
          <Text fontWeight="600" color="red.500" display="inline">
            {' '}
            NOT A BUG!!!
          </Text>
        </ListItem>
      </List>
    </Box>
  );
}

export default Rule;
