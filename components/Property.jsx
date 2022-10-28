// Component for all the Property Items for Rent/Buy

// Imports
import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar, useColorModeValue } from "@chakra-ui/react";
import { FaBed, FaBath, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
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
}) => (
  // <Link href={`/property/${externalID}`} passHref>
  <Flex
    flexWrap="wrap"
    w="400px"
    // p="5" paddingTop="0"
    m="20px 10px"
    marginBottom={0}
    justifyContent="flex-start"
    cursor="pointer"
    borderRadius="8px"
    overflow="hidden"
    // border={"1px solid #e0e0e0"}

    _hover={{
      transform: "scale(1.02)",
      transitionDuration: "200ms",
      boxShadow: "1px 1px 5px #00000030",
    }}>
    <Box height={260}>
      <Image
        src={coverPhoto ? coverPhoto.url : DefaultImage}
        width={400}
        height={260}
        alt="house"
      />
    </Box>
    <Box
      w="full"
      p="15px"
      pt="5px"
      backgroundColor={useColorModeValue("gray.200", "gray.700")}>
      <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          {isVerified && (
            <Box paddingRight="3" color="green.400">
              <GoVerified />
            </Box>
          )}
          <Text fontWeight="bold" fontSize="lg">
            AED {millify(price)}
            {rentFrequency && `/${rentFrequency}`}
          </Text>
        </Flex>
        <Box>
          <Avatar
            borderRadius="none"
            width="100%"
            maxWidth={"100px"}
            size="sm"
            src={agency?.logo?.url}
          />
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        p="1 0px"
        justifyContent="space-between"
        w="250px"
        color="blue.400">
        {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
        <BsGridFill />
      </Flex>
      <Flex marginY={2}>
        <AiFillStar
          color="gold"
          w={8}
          h={8}
          boxShadow="1px 1px 5px #00000030"
        />
        <AiFillStar color="gold" boxShadow="1px 1px 5px #00000030" />
        <AiFillStar color="gold" boxShadow="1px 1px 5px #00000030" />
        <AiFillStar color="gold" boxShadow="1px 1px 5px #00000030" />
        {parseInt(millify(price).slice(0, -1)) > 10 ? (
          <AiFillStar color="gold" boxShadow="1px 1px 5px #00000030" />
        ) : (
          <AiOutlineStar color="gold" boxShadow="1px 1px 5px #00000030" />
        )}
      </Flex>
      <Text fontSize="lg">
        {title.length > 30 ? `${title.substring(0, 30)}...` : title}
      </Text>
    </Box>
  </Flex>
  // </Link>
);

export default Property;
