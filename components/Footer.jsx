import NewLogo from "../assets/images/newLogoNoBg.png";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"xl"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => (
  <Box borderTop={"1px"} borderColor="gray.100">
    <Container as={Stack} maxW={"6xl"} py={10}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} spacing={8}>
        <Stack align={"center"}>
          <ListHeader>Company</ListHeader>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms and Conditions</Link>
          <Link href="#">Contributers</Link>
        </Stack>
        <Stack align={"center"}>
          <ListHeader>Useful Links</ListHeader>
          <Link href="/search?purpose=for-sale" passHref>
            Buy Property
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            Rent Property
          </Link>
          <Link href="/about" passHref>
            About Us
          </Link>
        </Stack>
      </SimpleGrid>
    </Container>
    <Box pb={10}>
      <Flex
        align={"center"}
        _before={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          ml: 8,
        }}>
        <Image
          boxSize="100px"
          src={NewLogo.src}
          alt="logo"
          position="relative"
        />
      </Flex>
      <Text pt={6} fontSize={"sm"} textAlign={"center"} color="gray.600">
        © 2022 Magic Properties, Inc. All rights reserved
      </Text>
      <Text fontSize={"sm"} textAlign={"center"} color="green.600">
        Made with ❤ by &nbsp;
        <a href="https://www.linkedin.com/in/biswarghya-biswas/">
          Biswarghya Biswas
        </a>
      </Text>
      <Stack direction={"row"} spacing={6} justifyContent={"center"} mt={6}>
        <Link href="https://www.linkedin.com/in/biswarghya-biswas/">
          <FaLinkedin size={30} />
        </Link>
        <Link href="https://github.com/lazyfuhrer/">
          <FaGithub size={30} />
        </Link>
        <Link href="https://twitter.com/BiswarghyaB">
          <FaTwitter size={30} />
        </Link>
      </Stack>
    </Box>
  </Box>
);

export default Footer;
