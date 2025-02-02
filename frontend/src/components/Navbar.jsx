/* eslint-disable no-unused-vars */
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import CreateUserModal from "./CreateUserModal";

const Navbar = ({setUsers}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"900px"}>
      <Box px={4} my={4} borderRadius={5} bg={useColorModeValue("gray.200", "gray.700")}>
        <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
          {/* Left Side */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={3}
            display={{ base: "none", sm: "flex" }}
          >
            <img src="/react.png" width={50} height={50} alt="logo" />
            <Text fontSize={"40px"}>
              +
            </Text>
            <img src="/python.png" width={50} height={40} alt="logo" />
            <Text fontSize={"40px"}>
              {" "}
              =
            </Text>
            <img src="/explode.png" width={45} height={45} alt="logo" />
          </Flex>
          {/* Right Side */}
          <Flex gap={3} alignItems={"center"}>
            <Text
              fontSize={"lg"}
              fontWeight={500}
              display={{ base: "none", md: "block" }}
            >
              BFFship 🔥
            </Text>

            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <IoMoonOutline /> : <IoSunnyOutline size={20} />}
            </Button>
            <CreateUserModal setUsers={setUsers} />
          </Flex>
        </Flex>
        
      </Box>

    </Container>
  );
};
export default Navbar;
