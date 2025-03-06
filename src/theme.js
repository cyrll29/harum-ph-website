import { extendTheme } from "@chakra-ui/react";
import { color } from "framer-motion";

const theme = extendTheme({
  colors: {
    error: 'red.500',
    text: {
      default: '#42adf5',
      secondary: '#730000',
      white: '#fff',
      _dark: '#730000',
    },
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
    Button: {
      baseStyle: {
        color: 'text.default',
        _dark: {
          color: 'text.white'
        }
      }
    }
  }
})

export default theme;