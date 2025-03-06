import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  semanticTokens: {
    colors: {
      error: 'red.500',
      text: {
        default: '#42adf5',
        secondary: '#730000',
        white: '#fff',
        _dark: '#730000',
      },
    },
  },
})

export default theme;