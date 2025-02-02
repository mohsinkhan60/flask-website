import {
   Button,
   Input,
   PopoverArrow,
   PopoverBody,
   PopoverContent,
   PopoverRoot,
   PopoverTitle,
   PopoverTrigger,
   Textarea
} from "@chakra-ui/react";
import React from "react";
import { CiEdit } from "react-icons/ci";

const EditModal = () => {
  return (
    <>
      <PopoverRoot>
        <PopoverTrigger asChild>
          <CiEdit />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />

          <PopoverBody>
            <PopoverTitle mt={4} mb={2} fontWeight="medium">
              Full Name
            </PopoverTitle>
            <Input
              placeholder="Full Name"
              // value={inputs.name}
              // onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            />
            <PopoverTitle mt={4} mb={2} fontWeight="medium">
              Role Form
            </PopoverTitle>
            <Input
              placeholder="Role"
              // value={inputs.role}
              // onChange={(e) => setInputs({ ...inputs, role: e.target.value })}
            />

            <PopoverTitle mt={4} mb={2} fontWeight="medium">
              Description
            </PopoverTitle>
            <Textarea
              resize={"none"}
              overflowY={"hidden"}
              placeholder="He's a software engineer who loves to code and build things."
              // value={inputs.description}
              // onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
            />

            <Button mt={4}>Submit</Button>
          </PopoverBody>
        </PopoverContent>
      </PopoverRoot>
    </>
  );
};
export default EditModal;
