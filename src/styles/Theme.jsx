import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#0D0D0D", // fundo principal
        color: "#E8E5DA", // texto claro principal
      },
    },
  },
  colors: {
    primary: {
      50: "#E3F2FD",
      100: "#BBDEFB",
      200: "#90CAF9",
      300: "#64B5F6",
      400: "#42A5F5",
      500: "#0077FF", // botão "Saiba mais"
      600: "#1565C0",
      700: "#0D47A1",
      800: "#0B3A91",
      900: "#0A2C7A",
    },
    background: {
      default: "#0D0D0D",
      contrast: "#1A1A1A", // pode usar para cards ou seções
      inverted: "#E8E5DA",
    },
    text: {
      primary: "#E8E5DA",
      secondary: "#0D0D0D",
    },
    accent: {
      500: "#00C7B7", // um tom de ciano usado em ícones ou detalhes visuais
    },
    whiteAlpha: {
      900: "#FFFFFF",
    },
    blackAlpha: {
      900: "#000000",
    },
  },
  fonts: {
    heading: "coolvetica, sans-serif",
    body: "trebuchet, sans-serif",
  },
});
