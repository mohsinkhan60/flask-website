import { Box, Card, Flex, Heading, Text } from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import EditModal from "./EditModel";

const UserCard = ({ user }) => {
  return (
    <Card.Root>
      <Card.Header>
        <Flex gap={4}>
          <Flex flex={"1"} gap={"4"} alignItems={"center"}>
            {/* <Avatar src={user?.imgUrl} /> */}


            <Box>
              <Heading size="sm">{user?.name}</Heading>
              <Text>{user?.role}</Text>
            </Box>
          </Flex>

          <Flex gap={2} cursor={PointerEvent}>
            <EditModal user={user} />
            <BiTrash />
          </Flex>
        </Flex>
      </Card.Header>

      <Card.Body gap="2">
        <Text>{user?.description}</Text>
      </Card.Body>
    </Card.Root>
  );
};
export default UserCard;
