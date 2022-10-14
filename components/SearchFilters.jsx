import { useEffect, useState } from "react";
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Icon,
  Button,
  useColorModeValue,
  InputGroup,
  InputRightAddon,
  CircularProgress,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { CloseIcon } from "@chakra-ui/icons";
import AsyncSelect from "react-select/async";
// import Image from "next/image";

import { filterData, getFilterValues } from "../Utils/filterData";
import { baseUrl, fetchApi } from "../Utils/fetchApi";
// import noresult from "../assets/images/noresult.svg";

export default function SearchFilters() {
  const [filters] = useState(filterData);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationData, setLocationData] = useState();
  const [showLocations, setShowLocations] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // color modes for light/ dark
  const searchbg = useColorModeValue("gray.100", "gray.700");
  const inputcolor = useColorModeValue("gray.800", "gray.200");
  const searchProperties = (filterValues) => {
    setLoading((state) => true);
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query: query });
    setLoading((state) => false);
  };
  // const promiseOptions = async (inputValue) => {
  //   setLoading(() => true);
  //   const data = await fetchApi(`${baseUrl}/auto-complete?query=${inputValue}`);
  //   setLoading(() => false);
  //   setLocationData(data?.hits);
  //   console.log(data.hits);
  //   return data?.hits;
  // };
  // const customStyles = {
  //   container: (provided, state) => ({
  //     ...provided,
  //     width: 500,
  //     cursor: "pointer",
  //     backgroundColor: "transperant",
  //   }),
  //   menu: (provided, state) => ({
  //     ...provided,
  //     color: useColorModeValue("white", "black"),
  //     backgroundColor: useColorModeValue("gray", "white"),
  //   }),
  // };
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
    <Flex bg={searchbg} justifyContent="center" flexWrap="wrap">
      <Flex wrap="wrap" justifyContent="center" p="4">
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
      {/* 
      <Flex marginY={5} justifyContent="center" width="100%">
        <AsyncSelect
          styles={customStyles}
          cacheOptions
          loadOptions={promiseOptions}
          getOptionLabel={(option) => `${option.name}`}
        />
      </Flex> */}

      <Flex
        width="100%"
        borderTop="0.5px lightgray solid"
        justifyContent="center"
        wrap="wrap"
        paddingY={5}>
        {showLocations && (
          <Flex>
            <InputGroup
              focusBorderColor="gray.300"
              w="300px"
              margin={3}
              minWidth={"30%"}>
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
              {loading && (
                <CircularProgress isIndeterminate marginX={5} height={1} />
              )}
            </InputGroup>
            {showLocations && !loading && locationData?.length > 0 && (
              <Select
                minWidth={"30%"}
                overflow="auto"
                margin={3}
                value={searchTerm}
                onChange={(e) => {
                  const location = JSON.parse(e.target.value);
                  console.log(location);
                  searchProperties({
                    locationExternalIDs: location.externalID,
                  });
                  // setShowLocations(false);
                  setSearchTerm((state) => location.name);
                }}>
                {locationData?.map((location) => (
                  <option
                    key={location.id}
                    value={JSON.stringify({
                      name: location.name,
                      externalID: location.externalID,
                    })}>
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
          margin={3}>
          Search By Location
        </Button>
      </Flex>
    </Flex>
  );
}
