import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Image, Stack } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

import NewLogo from "../assets/images/newLogo.png"

const Navbar = () => (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box fontSize="3xl" color="#F56565" fontWeight="bold">
            <Stack direction='row'>
                <Image boxSize='42px' src={NewLogo.src} alt='logo' />
                <Link href="/" paddingLeft="2">Magic Properties</Link>
            </Stack>
        </Box>
        <Spacer/>
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu/>} variant="outlined" color="red.400" />
                <MenuList>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcHome/>}>Home</MenuItem>
                    </Link>
                    <Link href="/search" passHref>
                        <MenuItem icon={<BsSearch/>}>Search</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-sale" passHref>
                        <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-rent" passHref>
                        <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
);

export default Navbar;