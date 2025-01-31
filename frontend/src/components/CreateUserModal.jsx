// import { Radio } from "@/components/ui/radio";
import {
  Button,
  HStack,
  Input,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
  Textarea,
} from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";
import { Radio, RadioGroup } from "../components/ui/radio";

const CreateUserModal = () => {
  return (
    <>
      <PopoverRoot>
        <PopoverTrigger asChild>
          <Button>
            <BiAddToQueue />
          </Button>
        </PopoverTrigger>
        <PopoverContent mt={64}>
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

            <RadioGroup defaultValue="1">
              <HStack gap="6">
                <Radio value="1">male</Radio>
                <Radio value="2">female</Radio>
              </HStack>
            </RadioGroup>

            <Button mt={4}>Submit</Button>
          </PopoverBody>
        </PopoverContent>
      </PopoverRoot>
    </>
  );
};
export default CreateUserModal;
