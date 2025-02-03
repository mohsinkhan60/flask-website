import { Box, Card, Flex, Heading, Text } from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import EditModal from "./EditModel";
import { BASE_URL } from "../App";

const UserCard = ({ user, setUsers }) => {
  const handleDelete = async () => {
    try {
      const res = await fetch(`${BASE_URL}/friends/${user.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error);
      }
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
    } catch (error) {
      console.error(error);
    }
  };
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
            <BiTrash onClick={handleDelete} />
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
