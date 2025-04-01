import { Grid, GridItem } from "@chakra-ui/react";
const HeroSection = () => {
  return (
    <Grid
      h="100vh"
      templateColumns={{
        base: "1fr", // Single column for base to md
        md: "1fr",   // Still single column for md
        lg: "repeat(6, 1fr)" // Original 6-column layout for lg+
      }}
      templateRows={{
        base: "repeat(6, 1fr)", // Stack vertically for base/md
        md: "repeat(6, 1fr)",
        lg: "repeat(6, 1fr)" // Keep original row structure
      }}
      gap={2}
    >
      {/* Div 1 */}
      <GridItem
        display="flex"
        justifyContent="center"
        alignItems="center"
        colStart={{ base: 1, lg: 1 }}
        colEnd={{ base: 2, lg: 3 }}
        rowStart={{ base: 1, lg: 1 }}
        rowEnd={{ base: 2, lg: 4 }}
        bg="red.200"
      >
        Div 1
      </GridItem>

      {/* Div 2 */}
      <GridItem
        colStart={{ base: 1, lg: 1 }}
        colEnd={{ base: 2, lg: 5 }}
        rowStart={{ base: 2, lg: 4 }}
        rowEnd={{ base: 3, lg: 7 }}
        bg="blue.200"
      >
        Div 2
      </GridItem>

      {/* Div 3 */}
      <GridItem
        colStart={{ base: 1, lg: 3 }}
        colEnd={{ base: 2, lg: 6 }}
        rowStart={{ base: 3, lg: 2 }}
        rowEnd={{ base: 4, lg: 4 }}
        bg="green.200"
      >
        Div 3
      </GridItem>

      {/* Div 4 */}
      <GridItem
        display="flex"
        justifyContent="center"
        alignItems="center"
        colStart={{ base: 1, lg: 3 }}
        colEnd={{ base: 2, lg: 7 }}
        rowStart={{ base: 4, lg: 1 }}
        rowEnd={{ base: 5, lg: 2 }}
        bg="yellow.200"
      >
        HARUM PH
      </GridItem>

      {/* Div 5 */}
      <GridItem
        colStart={{ base: 1, lg: 5 }}
        colEnd={{ base: 2, lg: 7 }}
        rowStart={{ base: 5, lg: 4 }}
        rowEnd={{ base: 6, lg: 7 }}
        bg="purple.200"
      >
        Div 5
      </GridItem>

      {/* Div 6 */}
      <GridItem
        colStart={{ base: 1, lg: 6 }}
        colEnd={{ base: 2, lg: 7 }}
        rowStart={{ base: 6, lg: 2 }}
        rowEnd={{ base: 7, lg: 4 }}
        bg="orange.200"
      >
        Div 6
      </GridItem>
    </Grid>
  )
}

export default HeroSection