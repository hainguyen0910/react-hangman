/* eslint-disable react-hooks/exhaustive-deps */
import {
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import Footer from 'components/Footer';
import Hangman from 'components/Hangman';
import Logo from 'components/Logo';
import Rule from 'components/Rule';
import SelectedLetters from 'components/SelectedLetters';
import Welcome from 'components/Welcome';
import Word from 'components/Word';
import * as randomWords from 'random-words';
import React, { useEffect, useState } from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { RiCloseCircleFill } from 'react-icons/ri';
import { checkLetter, checkWin, checkWord } from 'utils';

function App() {
  const [word, setWord] = useState(randomWords(1)[0]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [letterInput, setLetterInput] = useState('');
  const [currentMode, setCurrentMode] = useState('');
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [result, setResult] = useState('');

  useEffect(() => {
    if (checkWord(word) > 6) {
      setWord(randomWords(1)[0]);
    }
  }, [word]);

  useEffect(() => {
    setResult(checkWin(correctLetters, wrongLetters, word));
  }, [selectedLetters]);

  useEffect(() => {
    if (result) {
      setCorrectLetters([...word.split('')]);
    }
    if (result === 'win' || result === 'lose') onOpen();
  }, [result]);

  useEffect(() => {
    if (currentMode === 'dark') {
      playAgain();
    }
  }, [currentMode]);

  const handleEventOnKeyDown = e => {
    if (e.key === 'Enter') {
      if (!selectedLetters.includes(e.target.value.toLowerCase())) {
        if (word.split('').includes(e.target.value.toLowerCase())) {
          setCorrectLetters([...correctLetters, e.target.value.toLowerCase()]);
        } else {
          console.log('vao');
          setWrongLetters([...wrongLetters, e.target.value.toLowerCase()]);
        }
        setSelectedLetters([
          ...checkLetter(e.target.value.toLowerCase(), selectedLetters),
        ]);
        setLetterInput('');
      } else {
        toast({
          title: 'Warning!!!',
          description: 'You already typed this letter!!!',
          status: 'warning',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });
      }
    }
  };

  const handleOnchange = e => {
    const regex = /^[a-zA-Z]{0,1}$/;
    const checkingResult = regex.exec(e.target.value.toLowerCase());
    if (checkingResult !== null) {
      setLetterInput(e.target.value);
    } else {
      toast({
        title: 'Error!!!',
        description: 'Only 1 alphabet character!!!',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  const playAgain = () => {
    setWord(randomWords(1)[0]);
    setWrongLetters([]);
    setSelectedLetters([]);
    setCorrectLetters([]);
    setLetterInput('');
    setResult('');
  };

  console.log(word);
  return (
    <Flex flexDir="column" h="100vh" p={3} textAlign="center" fontSize="xl">
      <Flex justifyContent="space-between" p="4">
        <Logo h="10" pointerEvents="none" />
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
        >
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'red.400',
              zIndex: -1,
            }}
          >
            Hangman
          </Text>
          <Text as={'span'} color={'red.400'}>
            {' '}
            game
          </Text>
        </Heading>
        <ColorModeSwitcher setCurrentMode={setCurrentMode} />
      </Flex>

      <Divider />
      <Grid h="100%" templateColumns="repeat(6, 1fr)" gap={4}>
        <GridItem colSpan={1} borderRight="1px solid white">
          <Rule />
        </GridItem>
        {currentMode === 'dark' ? (
          <>
            <GridItem colSpan={4}>
              <Center h="100%" flexDir="column">
                <Hangman wrongLetters={wrongLetters} />
                <Word word={word} correctLetters={correctLetters} />
                {currentMode === 'dark' && (
                  <Input
                    w="25%"
                    my="5rem"
                    placeholder="Enter to send"
                    pattern="[A-Za-z]+"
                    disabled={wrongLetters.length === 6 && true}
                    value={letterInput}
                    onKeyDown={e => handleEventOnKeyDown(e)}
                    onChange={e => handleOnchange(e)}
                  />
                )}
              </Center>
            </GridItem>
            <GridItem colSpan={1} borderLeft="1px solid white">
              <SelectedLetters
                selectedLetters={selectedLetters}
                playAgain={playAgain}
                viewResult={onOpen}
                currentMode={currentMode}
                result={result}
              />
            </GridItem>
          </>
        ) : (
          <GridItem colSpan={4}>
            <Welcome />
          </GridItem>
        )}
      </Grid>

      <Footer />
      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Notification</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {result === 'win' && (
              <Center flexDir="column">
                <Heading>WIN 😍!!!!</Heading>
                <Icon
                  as={BiCheckCircle}
                  w="20"
                  h="20"
                  color="green.500"
                  mt="5"
                />
                <Text maxWidth="sm" mt="2" textAlign="center">
                  Congratulations on winning! The keyword this time is{' '}
                  <Text
                    color="red"
                    display="inline"
                  >{`${word.toUpperCase()} `}</Text>{' '}
                  and you guessed it{' '}
                  <Text
                    color="red"
                    display="inline"
                  >{`${selectedLetters.length} `}</Text>{' '}
                  times
                </Text>
              </Center>
            )}
            {result === 'lose' && (
              <Center flexDir="column">
                <Icon as={RiCloseCircleFill} w="20" h="20" color="red.500" />
                <Heading>LOSE 😭!!!!</Heading>
                <Text maxWidth="sm" mt="2" textAlign="center">
                  Sorry, you have already lost! The keyword this time is{' '}
                  <Text color="red">{`${word.toUpperCase()} `}</Text>
                </Text>
              </Center>
            )}
          </ModalBody>

          <ModalFooter />
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default App;
