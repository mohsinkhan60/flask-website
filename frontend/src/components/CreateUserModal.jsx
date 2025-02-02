// import { Radio } from "@/components/ui/radio";
import {
  Button,
  For,
  HStack,
  Input,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
  Textarea
} from "@chakra-ui/react";
import { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { BASE_URL } from "../App";
import { Radio, RadioGroup } from "../components/ui/radio";
import { toaster } from "./ui/toaster";

const CreateUserModal = ({setUsers}) => {
  // const { loading, isLoading } = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    role: "",
    description: "",
    gender: "",
  });

  const handleCreateUser = async (e) => {
    e.preventDefault();
    // isLoading(true)
    try {
      const res = await fetch(BASE_URL + "/friends", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      <HStack>
        <For each={["success", "error", "warning", "info"]}>
          {(type) => (
            <Button
              size="sm"
              variant="outline"
              key={type}
              onClick={() =>
                toaster.create({
                  title: `Toast status is ${type}`,
                  type: type,
                })
              }
            >
              {type}
            </Button>
          )}
        </For>
      </HStack>;
      setUsers((pre) => [...pre, data])
    } catch (error) {
      <HStack>
        <For each={["success", "error", "warning", "info"]}>
          {(type) => (
            <Button
              size="sm"
              variant="outline"
              key={type}
              onClick={() =>
                toaster.create({
                  title: `Toast status is ${type}`,
                  type: type,
                })
              }
            >
              {type}
            </Button>
          )}
        </For>
      </HStack>;
    } finally {
      // isLoading(false);
      setInputs({
        name: "",
        role: "",
        description: "",
        gender: "",
      });
    }
  };

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
          <form onSubmit={handleCreateUser}>
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
                onChange={(e) =>
                  setInputs({ ...inputs, description: e.target.value })
                }
              />

              <RadioGroup defaultValue="1">
                <HStack gap="6">
                  <Radio
                    value="male"
                    onChange={(e) =>
                      setInputs({ ...inputs, gender: e.target.value })
                    }
                  >
                    male
                  </Radio>
                  <Radio
                    value="female"
                    onChange={(e) =>
                      setInputs({ ...inputs, gender: e.target.value })
                    }
                  >
                    female
                  </Radio>
                </HStack>
              </RadioGroup>

              <Button mt={4} type="submit" >
                Submit
              </Button>
            </PopoverBody>
          </form>
        </PopoverContent>
      </PopoverRoot>
    </>
  );
};
export default CreateUserModal;
