"use client";

import { ChakraProvider, defineConfig, createSystem } from "@chakra-ui/react"
import { system } from "@/theme";

import Navbar from "@/components/Navbar";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <ChakraProvider value={system}>
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
