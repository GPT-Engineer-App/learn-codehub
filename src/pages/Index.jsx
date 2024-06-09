import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { FaCode, FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to CodeMaster
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Your ultimate platform to learn coding online.
        </Text>
        <Box display="flex" justifyContent="space-around" width="100%">
          <Button leftIcon={<FaCode />} colorScheme="teal" variant="solid" size="lg">
            Courses
          </Button>
          <Button leftIcon={<FaChalkboardTeacher />} colorScheme="teal" variant="solid" size="lg">
            Tutorials
          </Button>
          <Button leftIcon={<FaLaptopCode />} colorScheme="teal" variant="solid" size="lg">
            Practice
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;