import { Box, Container, Divider, Stack, Text } from '@chakra-ui/react';
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
          <Text>© 2021 Design by me!</Text>
          <Stack direction="row" spacing={6}>
            <SocialButton label="Github" href="/">
              <FaGithub />
            </SocialButton>
            <SocialButton label="Facebook" href="/">
              <FaFacebook />
            </SocialButton>
            <SocialButton label="LinkedIn" href="/">
              <FaLinkedin />
            </SocialButton>
            <SocialButton label="Twitter" href="/">
              <FaSkype />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
