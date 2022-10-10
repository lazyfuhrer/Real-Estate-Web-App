import { useEffect, useState } from "react";
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
  useColorModeValue,
  Spacer,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { CloseIcon } from "@chakra-ui/icons";
// import { MdCancel } from "react-icons/md";
import Image from "next/image";

import { filterData, getFilterValues } from "../Utils/filterData";
import { baseUrl, fetchApi } from "../Utils/fetchApi";
import noresult from "../assets/images/noresult.svg";

export default function SearchFilters() {
  const [filters] = useState(filterData);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationData, setLocationData] = useState();
  const [showLocations, setShowLocations] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // color modes for light/ dark
  const searchbg = useColorModeValue("gray.100", "gray.700");

  const searchProperties = (filterValues) => {
    setLoading(true);
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query: query });
    setLoading(false);
  };

  useEffect(() => {
    if (searchTerm !== "") {
      const fetchData = async () => {
        setLoading(true);
        const data = await fetchApi(
          `${baseUrl}/auto-complete?query=${searchTerm}`
        );
        setLoading(false);
        setLocationData(data?.hits);
      };

      fetchData();
    }
  }, [searchTerm]);

  return (
    <Flex bg={searchbg} p="4" justifyContent="center" flexWrap="wrap">
      <Flex wrap="wrap" justifyContent="center">
        {filters?.map((filter) => (
          <Box key={filter.queryName}>
            <Select
              onChange={(e) =>
                searchProperties({ [filter.queryName]: e.target.value })
              }
              placeholder={filter.placeholder}
              w="fit-content"
              p="2">
              {filter?.items?.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </Select>
          </Box>
        ))}
      </Flex>
      <Spacer />
      <Flex>
        {showLocations && (
          <Flex pos="relative" paddingTop="2">
            <InputGroup focusBorderColor="gray.300" w="300px">
              <Input
                placeholder="Type Here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm !== "" && (
                <InputRightAddon>
                  <Icon
                    as={CloseIcon}
                    cursor="pointer"
                    // top="5"
                    zIndex="100"
                    onClick={() => setSearchTerm("")}
                  />
                </InputRightAddon>
              )}
              {loading && <Spinner margin="auto" marginTop="3" />}
            </InputGroup>
            {showLocations && (
              <Select overflow="auto">
                {locationData?.map((location) => (
                  <option
                    key={location.id}
                    onClick={() => {
                      searchProperties({
                        locationExternalIDs: location.externalID,
                      });
                      setShowLocations(false);
                      setSearchTerm(location.name);
                    }}>
                    {/* <Text
                      cursor="pointer"
                      bg="gray.200"
                      p="2"
                      borderBottom="1px"
                      borderColor="gray.100"> */}
                    {location.name}
                    {/* </Text> */}
                  </option>
                ))}
                {!loading && !locationData?.length && (
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    flexDir="column"
                    marginTop="5"
                    marginBottom="5">
                    {/* <Image src={noresult} /> */}
                    <Text fontSize="xl" marginTop="3">
                      Please enter location!
                    </Text>
                  </Flex>
                )}
              </Select>
            )}
          </Flex>
        )}
        <Button
          onClick={() => setShowLocations(!showLocations)}
          border="1px"
          borderColor="gray.200"
          marginTop="2">
          Search Location
        </Button>
      </Flex>
    </Flex>
  );
}
