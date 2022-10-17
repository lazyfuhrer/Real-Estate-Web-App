// Component for all the Property Items for Rent/Buy

// Imports
import Image from "next/image";
import { Box, Flex, Text, Avatar, useColorModeValue } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import DefaultImage from "../assets/images/house.jpg";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => {
  return (
    // <Link href={`/property/${externalID}`} >
    <Flex
      flexWrap="wrap"
      w="400px"
      // p="5" paddingTop="0"
      m="13px"
      justifyContent="flex-start"
      cursor="pointer"
      borderRadius="8px"
      overflow="hidden"
      bg={useColorModeValue("", "dark.600")}
      /* border={"1px solid #e0e0e0"} */
      boxShadow="1px 1px 5px #00000028"
      _hover={{ transform: "scale(1.05)", transitionDuration: "150ms" }}
    >
      <Box>
        <Image
          src={coverPhoto ? coverPhoto.url : DefaultImage}
          width={400}
          height={260}
          alt="house"
        />
      </Box>
      <Box w="full" p="15px" pt="5px">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight="3" color="green.400">
              {isVerified && <GoVerified />}
            </Box>
            <Flex alignItems="center" gap="1">
              <Text
                fontWeight="bold"
                fontSize="lg"
                color={useColorModeValue("dark.400", "gray.100")}
              >
                AED
              </Text>
              <Text fontWeight="bold" fontSize="lg" color="blue.400">
                {millify(price)}
              </Text>
              {rentFrequency && (
                <Text
                  fontWeight="bold"
                  fontSize="md"
                  color={useColorModeValue("gray.400", "gray.300")}
                >
                  {` /${rentFrequency}`}
                </Text>
              )}
            </Flex>
          </Flex>
          <Box>
            <Avatar size="sm" src={agency?.logo?.url} />
          </Box>
        </Flex>
        <Flex
          alignItems="center"
          p="1"
          justifyContent="space-between"
          w="250px"
          color={useColorModeValue("gray.500", "gray.200")}
        >
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
          <BsGridFill />
        </Flex>
        <Flex>
          <AiFillStar color="#fac91c" w={8} h={8} />
          <AiFillStar color="#fac91c" />
          <AiFillStar color="#fac91c" />
          <AiFillStar color="#fac91c" />
          {parseInt(millify(price).slice(0, -1)) > 10 ? (
            <AiFillStar color="#fac91c" />
          ) : (
            <AiFillStar color={useColorModeValue("#dcdcdc", "#464646")} />
          )}
        </Flex>
        <Text fontSize="lg" color={useColorModeValue("dark.400", "gray.100")}>
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </Text>
      </Box>
    </Flex>
    // </Link>
  );
};

export default Property;
