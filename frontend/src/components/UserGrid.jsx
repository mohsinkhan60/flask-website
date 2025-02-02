/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Flex, Grid, Spinner } from "@chakra-ui/react";
import UserCard from "./UserCard";
import { useEffect, useState } from "react";

const UserGrid = ({ users, setUsers }) => {
  const { loading, isLoading } = useState(true);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch("http://127.0.0.1:5000/api/friends");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error);
        }
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        isLoading(false);
      }
    };
    getUsers();
  }, [setUsers]);
  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Grid>
      {loading && (
        <Flex justifyContent={"center"}>
          <Spinner size={"xl"} />
        </Flex>
      )}
    </>
  );
};
export default UserGrid;
