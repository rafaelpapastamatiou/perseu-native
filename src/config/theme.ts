import { extendTheme, themeTools } from "native-base";
import { colors } from "./colors";

export const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  colors: {
    brand: {
      50: "#fffcda",
      100: "#fff5ad",
      200: "#ffef7d",
      300: "#ffe94b",
      400: colors.goldenYellow,
      500: "#e6c900",
      600: "#b39c00",
      700: "#806f00",
      800: "#4d4300",
      900: "#1c1600",
    },
    primary: {
      50: "#fffcda",
      100: "#fff5ad",
      200: "#ffef7d",
      300: "#ffe94b",
      400: colors.goldenYellow,
      500: "#e6c900",
      600: "#b39c00",
      700: "#806f00",
      800: "#4d4300",
      900: "#1c1600",
    },
    dark: {
      "50": colors.eirieBlack,
      "100": colors.jetBlack,
      "500": colors.silver,
    },
  },
  components: {
    Input: {
      baseStyle: (props: any) => {
        return {
          _android: {
            _focus: {
              borderColor: "brand.500",
            },
          },
          _ios: {
            _focus: {
              borderColor: "brand.500",
            },
          },
          background: "dark.100",
          borderColor: "dark.100",
        };
      },
    },
    Button: {
      baseStyle: (props: any) => {
        return {
          _focus: {
            borderColor: "brand.500",
          },
          _android: {
            _focus: {
              borderColor: "brand.500",
            },
          },
          _ios: {
            _focus: {
              borderColor: "brand.500",
            },
          },
          _text: {
            color: "dark.50",
          },
        };
      },
    },
    Accordion: {
      baseStyle: (props: any) => {
        return {
          borderWidth: 0,
        };
      },
    },
    AccordionSummary: {
      baseStyle: (props: any) => {
        return {
          _expanded: {
            bg: "brand.500",
          },
        };
      },
    },
    Text: {
      baseStyle: (props: any) => {
        return {
          color: colors.platinum,
        };
      },
    },
    FormControlLabel: {
      baseStyle: (props: Record<string, any>) => {
        return {
          _text: {
            fontSize: "xl",
            fontWeight: "medium",
            color: "dark.600",
          },
          mb: "2",
          mr: "3",
        };
      },
    },
    ModalContent: {
      baseStyle: (props: Record<string, any>) => {
        return {
          bg: "dark.100",
        };
      },
    },
    ModalFooter: {
      baseStyle: (props: Record<string, any>) => {
        return {
          bg: "dark.100",
        };
      },
    },
    ModalHeader: {
      baseStyle: (props: Record<string, any>) => {
        return {
          _text: {
            color: "dark.600",
          },
        };
      },
    },
  },
});
