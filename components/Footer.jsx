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
      <Flex justify='start' style={{padding:"5px 0px 0 0"}}>
        <a href="https://www.linkedin.com/in/biswarghya-biswas/" style={{padding:"0 20px 0 0"}}><FaLinkedin size={30}/></a>
        <a href="https://github.com/lazyfuhrer/" style={{padding:"0 20px 0 0"}}><FaGithub size={30}/></a>
        <Link href="https://github.com/lazyfuhrer"><CgProfile size={30}/></Link>
        <Link href="https://github.com/lazyfuhrer" style={{padding:"2px 2px 0 1px"}}>My GitHub</Link>
      </Flex>
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
