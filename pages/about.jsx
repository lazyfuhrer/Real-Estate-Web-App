// import React from "react";
// import { Button } from "@chakra-ui/react";
// import Image from "next/image";
// import HomeIcon from "../assets/images/home-icon.svg";

// const about = () => {
//   return (
//     <Box
//       as="section"
//       // backgroundImage="url('https://user-images.githubusercontent.com/32286691/195487071-7a850490-0eb0-4f2d-a90c-d7cb054751c5.png')"
//       backgroundPosition="center"
//       backgroundRepeat="no-repeat"
//       backgroundSize="cover"
//       display="flex"
//       flexDirection="column">
//       <Box
//         p={4}
//         backdropFilter="auto"
//         backdropBlur="5px"
//         // backgroundColor="rgba(255, 255, 255, 0.3)"
//         // minHeight="100vh"
//       >
//         <Heading
//           as="h1"
//           mb={5}
//           color="#F56565"
//           fontSize="32px"
//           textAlign="center">
//           About Us
//         </Heading>
//         <Text as="p" fontSize="16px" textAlign="center">
//           This is a real estate web application created using NextJS and
//           ChakraUI. Feel free to check out our{" "}
//           <Link href="https://github.com/lazyfuhrer/Real-Estate-Web-App">
//             GitHub
//           </Link>
//           .
//         </Text>

//         <Box
//           display="flex"
//           flexDirection={{ base: "column", md: "row" }}
//           justifyContent="space-around"
//           marginTop="50px">
//           <Box
//             width={{ base: "100%", sm: "331px" }}
//             height={{ base: "100%", sm: "281px" }}
//             padding="24px"
//             borderRadius="14px"
//             boxShadow="0px 0px 10px 6px rgba(167, 167, 167, 0.25)"
//             backgroundColor="rgba(255, 236, 236, 0.72)"
//             display="flex"
//             flexDirection="column"
//             margin="auto">
//             <Heading
//               as="h2"
//               textAlign="center"
//               color="#BD3939"
//               fontSize="32px"
//               lineHeight="48px">
//               Buy Property
//             </Heading>

//             <Box textAlign="center" margin="auto">
//               {/* <Image w={75} h={71} src={HomeIcon} alt="about" /> */}
//               <Text as="p" fontSize="20px" lineHeight="24px" textAlign="center">
//                 Buy your Property Here
//               </Text>
//             </Box>

//             <Box textAlign="center">
//               <Button
//                 colorScheme="#FFD9D9"
//                 border="1px solid #D91165"
//                 color="#A70825"
//                 borderRadius="29px">
//                 Buy Now
//               </Button>
//             </Box>
//           </Box>

//           <Box
//             width={{ base: "100%", sm: "331px" }}
//             height={{ base: "100%", sm: "281px" }}
//             margin="auto"
//             marginTop={{ base: "16px", md: "0" }}
//             padding="24px"
//             borderRadius="14px"
//             boxShadow="0px 0px 10px 6px rgba(167, 167, 167, 0.25)"
//             backgroundColor="rgba(255, 236, 236, 0.72)"
//             display="flex"
//             flexDirection="column">
//             <Heading
//               as="h2"
//               textAlign="center"
//               color="#BD3939"
//               fontSize="32px"
//               lineHeight="48px">
//               Sell Property
//             </Heading>

//             <Box textAlign="center" margin="auto">
//               {/* <Image w={75} h={71} src={HomeIcon} alt="about" /> */}
//               <Text as="p" fontSize="20px" lineHeight="24px" textAlign="center">
//                 Sell your Property Here
//               </Text>
//             </Box>

//             <Box textAlign="center">
//               <Button
//                 colorScheme="#FFD9D9"
//                 border="1px solid #D91165"
//                 color="#A70825"
//                 borderRadius="29px">
//                 Buy Now
//               </Button>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default about;

import React from "react";
import {
  Box,
  Heading,
  Link,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const about = () => {
  return (
    <Box
      as="section"
      backgroundImage="url('https://user-images.githubusercontent.com/32286691/195487071-7a850490-0eb0-4f2d-a90c-d7cb054751c5.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      display="flex"
      flexDirection="column"
      marginY={"auto"}>
      <Box
        p={4}
        paddingY={20}
        backdropBlur="5px"
        backgroundColor="rgba(35, 0, 0, 0.6)"
        minHeight="70vh"
        marginY={"auto"}
        alignContent={"center"}>
        <Heading
          as="h1"
          mb={5}
          color="#F56565"
          fontSize="32px"
          textAlign="center">
          About Us
        </Heading>
        <Text as="p" fontSize="16px" textAlign="center" color="white">
          This is a real estate web application created using NextJS and
          ChakraUI. Feel free to check out our{" "}
          <Link href="https://github.com/lazyfuhrer/Real-Estate-Web-App">
            GitHub
          </Link>
          .
        </Text>

        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-around"
          marginTop="50px">
          <Box
            width={{ base: "100%", sm: "331px" }}
            height={{ base: "100%", sm: "281px" }}
            padding="24px"
            borderRadius="14px"
            // boxShadow="0px 0px 10px 6px rgba(167, 167, 167, 0.25)"
            backgroundColor={useColorModeValue("gray.200", "gray.900")}
            display="flex"
            flexDirection="column"
            margin="auto">
            <Heading
              as="h2"
              textAlign="center"
              color="#BD3939"
              fontSize="32px"
              lineHeight="48px">
              Buy Property
            </Heading>

            <Box textAlign="center" margin="auto">
              {/* <Image w={75} h={71} src={HomeIcon} alt="about" /> */}
              <Text as="p" fontSize="20px" lineHeight="24px" textAlign="center">
                Buy your Property Here
              </Text>
            </Box>

            <Box textAlign="center">
              <Button
                colorScheme="#FFD9D9"
                border="1px solid #D91165"
                color={useColorModeValue("red.600", "red.300")}
                borderRadius="29px"
                _hover={{
                  backgroundColor: useColorModeValue("red.200", "red.900"),
                }}>
                Buy Now
              </Button>
            </Box>
          </Box>

          <Box
            width={{ base: "100%", sm: "331px" }}
            height={{ base: "100%", sm: "281px" }}
            margin="auto"
            marginTop={{ base: "16px", md: "0" }}
            padding="24px"
            borderRadius="14px"
            // boxShadow="0px 0px 10px 6px rgba(167, 167, 167, 0.25)"
            backgroundColor={useColorModeValue("gray.200", "gray.900")}
            display="flex"
            flexDirection="column">
            <Heading
              as="h2"
              textAlign="center"
              color="#BD3939"
              fontSize="32px"
              lineHeight="48px">
              Sell Property
            </Heading>

            <Box textAlign="center" margin="auto">
              {/* <Image w={75} h={71} src={HomeIcon} alt="about" /> */}
              <Text as="p" fontSize="20px" lineHeight="24px" textAlign="center">
                Sell your Property Here
              </Text>
            </Box>

            <Box textAlign="center">
              <Button
                colorScheme="#FFD9D9"
                border="1px solid #D91165"
                color={useColorModeValue("red.600", "red.300")}
                borderRadius="29px"
                _hover={{
                  backgroundColor: useColorModeValue("red.200", "red.900"),
                }}>
                Buy Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default about;
