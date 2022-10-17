import { extendTheme } from "@chakra-ui/react";

const semanticTokens = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "gray.50", _dark: "dark.900" },
    "chakra-border-color": { _light: "gray.200", _dark: "dark.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "dark.400" },
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  semanticTokens,
  config,
  colors: {
    brand: {
      50: "#ffe4e4",
      100: "#feb5b6",
      200: "#f88687",
      300: "#F56565",
      400: "#f45757",
      500: "#F24242",
      600: "#F12525",
      700: "#F21111",
      800: "#D10A0A",
      900: "#B60C0C",
    },
    dark: {
      50: "#C1C2C5",
      100: "#A6A7AB",
      200: "#909296",
      300: "#5C5F66",
      400: "#373A40",
      500: "#2C2E33",
      600: "#25262B",
      700: "#1b1b1d",
      800: "#141517",
      900: "#101113",
    },
  },
});

export default theme;
