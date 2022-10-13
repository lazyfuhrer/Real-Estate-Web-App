import { Box, Flex, Image, Link,Stack,Text } from "@chakra-ui/react";
import NewLogo from "../assets/images/newLogoNoBg.png";
import { FaLinkedin,FaGithub } from 'react-icons/fa';

const Footer = () => (

  <>
  <Stack p='5' borderTop='1px' borderColor='gray.100' direction={['column','row']} justify='space-around' alignItems={['flex-start','center']}>
   
    <Flex  maxWidth='250px' direction='column' >
      <Image boxSize="100px" src={NewLogo.src} alt="logo" position='relative'/>
      <Text align={['start','center']} >Magic Properties is an Online platform to Buy or Rent top Properties in Dubai. It caters to a global market with its unique services and novel online features.</Text>
    </Flex>
    {/* Company related fields */}
    <Flex direction='column'>
      <Text fontWeight='semibold' fontSize='xl' mb='5px'>Company</Text>
      <Link href="#">Privacy Policy</Link>
      <Link href="#">Terms and Conditions</Link>
      <Link href="#">Contributers</Link>
    </Flex>
    {/* Useful links fields */}
    <Flex direction='column'>
      <Text fontWeight='semibold' fontSize='xl' mb='5px'>Useful Links</Text>
          <Link href="/search?purpose=for-sale" passHref>
          Buy Property
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
           Rent Property
          </Link>
          <Link href="/about" passHref>
            About Us
          </Link>
    </Flex>
    {/* Contact up fields */}
    <Flex direction='column'>
      <Text fontWeight='semibold' fontSize='xl' mb='5px'>Contact us</Text>
      <Link
          color="teal.500"
          href={`mailto:biswasbiswarghya@gmail.com`}
          target="_blank"
          rel="noopener noreferrer"
        >
          biswasbiswarghya@gmail.com
        </Link>
      <Flex justify='space-evenly'>
      <a href="https://www.linkedin.com/in/biswarghya-biswas/"><FaLinkedin/></a>
      <a href="https://github.com/lazyfuhrer/"><FaGithub/></a>
      </Flex>
      <Link href="https://github.com/lazyfuhrer/Real-Estate-Web-App">Repository</Link>
    </Flex>    
  </Stack>
  <Box textAlign="center" p="5" color="gray.600">
      © 2022 Magic Properties, Inc.
      <Box color="green.600">Made with ❤ by&nbsp;
          <a href="https://www.linkedin.com/in/biswarghya-biswas/">Biswarghya Biswas</a>
      </Box>
  </Box>

  </>

  
)

export default Footer;