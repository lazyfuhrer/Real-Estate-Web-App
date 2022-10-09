import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
	<>
		<Head>
			<title>Rent & Buy Properties</title>
		</Head>
		<header>
			<Navbar />
		</header>
		<Box maxWidth="1280px" m="auto">
			<main>{children}</main>
		</Box>
		<footer>
			<Footer />
		</footer>
	</>
);

export default Layout;
