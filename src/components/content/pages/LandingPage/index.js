import { Flex } from "@chakra-ui/react"
import HeroSection from "./HeroSection"

const LandingPage = () => {
  return (
    <Flex
      direction="column"
      w="100%"
      h="auto"
      p="2em"
    >
      <HeroSection />
    </Flex>
  )
}

export default LandingPage