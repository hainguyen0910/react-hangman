import { Box, Container, Divider, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaSkype } from 'react-icons/fa';
import SocialButton from './SocialButton';

function Footer(props) {
  return (
    <Box color="gray.500" {...props}>
      <Divider />

      <Box>
        <Container
          as={Stack}
          maxW="6xl"
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text>
            © 2021 - Hangman game -{' '}
            <Link href="https://github.com/hainguyen0910">Whistledev</Link>
          </Text>
          <Stack direction="row" spacing={6}>
            <SocialButton
              label="Github"
              href="https://github.com/hainguyen0910"
            >
              <FaGithub />
            </SocialButton>
            <SocialButton
              label="Facebook"
              href="https://www.facebook.com/hainguyen.091099/"
            >
              <FaFacebook />
            </SocialButton>
            <SocialButton
              label="LinkedIn"
              href="https://www.linkedin.com/in/whistledev"
            >
              <FaLinkedin />
            </SocialButton>
            <SocialButton
              label="Twitter"
              href="skype:live:.cid.69ac394d47e8104a?chat"
            >
              <FaSkype />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
