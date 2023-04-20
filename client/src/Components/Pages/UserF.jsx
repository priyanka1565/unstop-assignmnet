import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";

const UserF = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const UserData = { name, email, bio };
    console.log(UserData.name);

    try {
      const response = await axios.post(
        `http://localhost:8080/UserRouter/createUser`,
        {
          name: UserData?.name,
          email: UserData?.email,
          bio: UserData?.bio,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response,"res------------------------------1")
      console.log(response.data._id, "is-----------------1");
      setName("");
      setEmail("");
      setBio("");
      localStorage.setItem("user", JSON.stringify(response.data._id));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      padding={"2rem"}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
      marginTop={"5rem"}
      borderRadius={"0.5rem"}
    >
      <form onSubmit={handleSubmit}>
        <Heading textAlign={"center"} marginBottom={"2rem"}>
          User Form
        </Heading>
        <FormControl id="username">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </FormControl>

        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormControl>

        {/* <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl> */}

        <FormControl id="bio">
          <FormLabel>Bio</FormLabel>
          <Input
            type="textarea"
            id="bio"
            value={bio}
            onChange={(event) => setBio(event.target.value)}
          />
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit">
          Save
        </Button>
      </form>
    </Box>
  );
};
export default UserF;