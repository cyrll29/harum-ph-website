import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

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

export const buttonTheme = defineStyleConfig({
  variants: {
    primary: primaryVariantButton,
    outline: outlineVariantButton,
  }
})