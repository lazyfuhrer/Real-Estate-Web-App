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
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey,FiUserCheck } from "react-icons/fi";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";

import NewLogo from "../assets/images/newLogoNoBg.png";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Flex p="2" borderBottom="1px" borderColor="gray.100">
			<Box fontSize="3xl" color="#F56565" fontWeight="bold">
				<Stack direction="row">
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
				<Menu>
					<MenuButton
						as={IconButton}
						icon={<FcMenu />}
						variant="outlined"
						color="red.400"
					/>
					<MenuList>
						<Link href="/" passHref>
							<MenuItem icon={<FcHome />}>Home</MenuItem>
						</Link>
						<Link href="/search" passHref>
							<MenuItem icon={<BsSearch />}>Search</MenuItem>
						</Link>
						<Link href="/search?purpose=for-sale" passHref>
							<MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
						</Link>
						<Link href="/search?purpose=for-rent" passHref>
							<MenuItem icon={<FiKey />}>Rent Property</MenuItem>
						</Link>
						<Link href="/search?purpose=about-us" passHref>
							<MenuItem icon={<FiUserCheck />}>About Us</MenuItem>
						</Link>
					</MenuList>
				</Menu>
			</Box>
		</Flex>
	);
};

export default Navbar;
