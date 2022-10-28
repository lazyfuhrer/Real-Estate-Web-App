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
} from "@chakra-ui/react";
import { FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey, FiUserCheck } from "react-icons/fi";

import { MoonIcon, SunIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";

import NewLogo from "../assets/images/newLogoNoBg.png";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
      <Box
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="#F56565"
        fontWeight="bold">
        <Stack direction="row" alignItems="center">
          <Image boxSize="42px" src={NewLogo.src} alt="logo" />
          <Link href="/" paddingLeft="2">
            Magic Properties
          </Link>
        </Stack>
      </Box>
      <Spacer />
      <Box>
        {/* <IconButton m="auto" aria-label="Toggle Mode" onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </IconButton> */}

        <Menu>
          {({ isOpen }) => (
            <Fragment>
              <MenuButton
                // onClick={handleMenuClick}
                as={IconButton}
                icon={
                  !isOpen ? (
                    <HamburgerIcon width={5} height={5} />
                  ) : (
                    <CloseIcon width={3} height={3} />
                  )
                }
                variant="outlined"
                color="red.400"
              />
              <MenuList padding={0} margin={0}>
                <Link href="/" passHref>
                  <MenuItem
                    icon={<FcHome />}
                    backgroundColor={router.asPath === "/" && "#99accb"}>
                    Home
                  </MenuItem>
                </Link>
                <Link href="/search" passHref>
                  <MenuItem
                    icon={<BsSearch />}
                    backgroundColor={router.asPath === "/search" && "#99accb"}>
                    Search
                  </MenuItem>
                </Link>
                <Link href="/search?purpose=for-sale" passHref>
                  <MenuItem
                    icon={<FcAbout />}
                    backgroundColor={
                      router.asPath === "/search?purpose=for-sale" && "#99accb"
                    }>
                    Buy Property
                  </MenuItem>
                </Link>
                <Link href="/search?purpose=for-rent" passHref>
                  <MenuItem
                    icon={<FiKey />}
                    backgroundColor={
                      router.asPath === "/search?purpose=for-rent" && "#99accb"
                    }>
                    Rent Property
                  </MenuItem>
                </Link>
                <Link href="/about" passHref>
                  <MenuItem
                    icon={<FiUserCheck />}
                    backgroundColor={router.asPath === "/about" && "#99accb"}>
                    About Us
                  </MenuItem>
                </Link>
                <MenuItem>
                  <IconButton
                    width="100%"
                    alignSelf={"center"}
                    _hover={{ backgroundColor: "transparent" }}
                    bg="transparent"
                    height={6}
                    m="auto"
                    aria-label="Toggle Mode"
                    onClick={toggleColorMode}>
                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                  </IconButton>
                </MenuItem>
              </MenuList>
            </Fragment>
          )}
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
