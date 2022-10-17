import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey, FiUserCheck } from "react-icons/fi";

import { MoonIcon, SunIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";

import NewLogo from "../assets/images/newLogoNoBg.png";
import { useState } from "react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [menuIcon, setMenuIcon] = useState(true);
  const handleMenuClick = () => {
    setMenuIcon(!menuIcon);
  };
  return (
    <Flex
      p="2"
      borderBottom="1px"
      borderColor={useColorModeValue("gray.200", "dark.400")}
    >
      <Box fontSize="2xl" color="#F56565" fontWeight="bold">
        <Stack direction="row" alignItems="center">
          <Image boxSize="42px" src={NewLogo.src} alt="logo" />
          <Link href="/" paddingLeft="2">
            Magic Properties
          </Link>
        </Stack>
      </Box>
      <Spacer />
      <Box>
        <IconButton m="auto" aria-label="Toggle Mode" onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </IconButton>
        <Menu color={useColorModeValue("gray.200", "dark.400")}>
          <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" />
          <MenuList bg={useColorModeValue("gray.50", "dark.400")}>
            <Link href="/">
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href="/search">
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href="/search?purpose=for-sale">
              <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
            </Link>
            <Link href="/search?purpose=for-rent">
              <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
            </Link>
            <Link href="/about">
              <MenuItem icon={<FiUserCheck />}>About Us</MenuItem>
            </Link>
            <IconButton
              width="100%"
              alignSelf={"center"}
              bg="none"
              m="auto"
              aria-label="Toggle Mode"
              onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </IconButton>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
