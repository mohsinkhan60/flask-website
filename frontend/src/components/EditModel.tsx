import {
  Button,
  Input,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { BASE_URL } from "../App";

const EditModal = ({ user, setUsers }) => {
  const [inputs, setInputs] = React.useState({
    name: user.name || "",
    role: user.role || "",
    description: user.description || "",
  });

  const handleEditUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/friends/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === user.id ? data : u))
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <PopoverRoot>
        <PopoverTrigger asChild>
          <CiEdit />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <form onSubmit={handleEditUser}>
            <PopoverBody>
              <PopoverTitle mt={4} mb={2} fontWeight="medium">
                Full Name
              </PopoverTitle>
              <Input
                placeholder="Full Name"
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              />
              <PopoverTitle mt={4} mb={2} fontWeight="medium">
                Role Form
              </PopoverTitle>
              <Input
                placeholder="Role"
                value={inputs.role}
                onChange={(e) => setInputs({ ...inputs, role: e.target.value })}
              />

              <PopoverTitle mt={4} mb={2} fontWeight="medium">
                Description
              </PopoverTitle>
              <Textarea
                resize={"none"}
                overflowY={"hidden"}
                placeholder="He's a software engineer who loves to code and build things."
                value={inputs.description}
                onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
              />

              <Button mt={4} type="submit">
                Update
              </Button>
            </PopoverBody>
          </form>
        </PopoverContent>
      </PopoverRoot>
    </>
  );
};
export default EditModal;
