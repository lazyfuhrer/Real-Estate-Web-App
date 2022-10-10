import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "@chakra-ui/react";
import Image from "next/image";
import AboutImage from "../assets/images/aboutHome.jpg";

const About = () => {
  return (
    <Box as="section" p={4}>
      <Heading as="h1" size="4xl" mb={4}>
        About Us
      </Heading>
      <Box w="100%" h="auto">
        <Image src={AboutImage} alt="about" />
      </Box>
      <Text as="p">
        Magic Properties is an Online platform to Buy or Rent top Properties in
        Dubai. It caters to a global market with its unique services and novel
        online features. The Magic Properties design is based on rigorous
        research, unique product developments, and innovative initiative which
        has been readily accepted by users. In an attempt to best serve the
        users, features on the Magic Properties realty portal are constantly
        invented, evaluated and upgraded.
      </Text>

      <Text as="p">
        For any queries, feel free to mail us at&nbsp;
        <Link
          color="teal.500"
          href={`mailto:biswasbiswarghya@gmail.com`}
          target="_blank"
          rel="noopener noreferrer"
        >
          biswasbiswarghya@gmail.com
        </Link>
      </Text>
    </Box>
  );
};

export default About;
