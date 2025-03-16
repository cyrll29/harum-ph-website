import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const authVariant = defineStyle({ 
  my: 20,
  p: 10,
})

export const containerTheme = defineStyleConfig({
  variants: {
    authForm: authVariant,
  }
})