import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button, useColorModeValue } from "@chakra-ui/react";

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
}) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} width={500} height={300} alt="banner" />
      <Box p="5">
        <Text
          color={useColorModeValue("brand.400", "brand.200")}
          fontSize="md"
          fontWeight="medium"
        >
          {purpose}
        </Text>
        <Text fontSize={{ base: 30, sm: 40, lg: 50 }} fontWeight="bold">
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
          fontSize="lg"
          colorScheme="brand"
          color="gray.100"
          bg="brand.400"
          variant="solid"
        >
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
};

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
      <Flex flexWrap="wrap" justifyContent="center" marginBottom={10}>
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
