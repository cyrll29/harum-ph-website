import { extendTheme } from "@chakra-ui/react";

import { buttonTheme } from "./components/Button";
import { containerTheme } from "./components/Container";

// -------------------------------------------------- Theme Config ---------------------------------------------------
const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'primary.dark' : 'primary.default'
      }
    })
  },
  initialColorMode: 'dark',
  useSystemColorMode: true,
  colors: {
    primary: {
      light: '#695160',
      default: '#fff',
      dark: '#2e232a',
    },
    secondary: {
      light: '#ebddd8',
      default: '#2e232a',
      dark: '#CBBFBB'
    }
  },
  semanticTokens: {
    colors: {
      primary: {
        default: 'primary.default',
        _dark: 'primary.dark'
      },
      secondary: {
        default: 'secondary.default',
        _dark: 'secondary.dark'
      }
    }
  },
  breakpoints: {
    base: '0em',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
  components: {
    Button: buttonTheme,
    Container: containerTheme
  }
})

export default theme;