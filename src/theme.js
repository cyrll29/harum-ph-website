import { extendTheme, defineStyle, defineStyleConfig, Container } from "@chakra-ui/react";
// -------------------------------------------------- Button Theme ---------------------------------------------------
const primaryVariantButton = defineStyle({
  bg: 'secondary',
  color: 'primary',
  _hover: {
    bg: 'primary.light',
    color: '#fff'
  }
})

const outlineVariantButton = defineStyle({
  bg: 'transparent',
  border: '1px solid',
  borderColor: 'secondary',
  color: 'secondary',
  _hover: {
    bg: 'secondary',
    color: 'primary'
  }
})

const buttonTheme = defineStyleConfig({
  variants: {
    primary: primaryVariantButton,
    outline: outlineVariantButton,
  }
})

// ------------------------------------------------- Container Theme -------------------------------------------------

const authVariant = defineStyle({ 
  my: 20,
  p: 10,
})

const containerTheme = defineStyleConfig({
  variants: {
    authForm: authVariant,
  }
})

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