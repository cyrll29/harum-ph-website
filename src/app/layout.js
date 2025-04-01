import "./globals.css";
import { Flex } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
import { FirebaseAuthProvider } from "@/context/FirebaseAuthContext";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Harum PH",
  description: "HARUM PH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <FirebaseAuthProvider>
          <Provider>
            <Flex
              direction="column"
              minH="100vh"
            >
              <Navbar />
              <Flex
                as="main"
                flex="1"
                direction="column"
                p="2em"
                justifyContent="center"
                alignItems="center"
              >
                {children}
              </Flex>
            </Flex>
          </Provider>
        </FirebaseAuthProvider>
      </body>
    </html>
  );
}
