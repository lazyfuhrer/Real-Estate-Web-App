import Link from "next/link";
// import Image from "next/image";
import {
  Flex,
  Box,
  Text,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

import Property from "../components/Property";
import { baseUrl, fetchApi } from "../Utils/fetchApi";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
    m={{ sm: 0, md: 10 }}>
    <Image
      marginTop={10}
      src={imageUrl}
      width={{ sm: "100%", md: 500 }}
      height={{ sm: "100%", md: 300 }}
      alt="banner"
    />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button
        fontSize="xl"
        backgroundColor={useColorModeValue("red.200", "red.400")}
        _hover={{ backgroundColor: useColorModeValue("red.100", "red.600") }}>
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ proprtiesForSale, proprtiesForRent }) {
  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes in"
        title2="Affordable Prices"
        desc1="Explore apartments, villas and more"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap" justifyContent="center">
        {proprtiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose="BUY A HOME"
        title1="Find, Buy & Own"
        title2="Your Dream Home!"
        desc1="Explore apartments, villas and more"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap="wrap" justifyContent="center" marginBottom={10}>
        {proprtiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const proprtyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const proprtyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      proprtiesForSale: proprtyForSale?.hits,
      proprtiesForRent: proprtyForRent?.hits,
    },
  };
}
