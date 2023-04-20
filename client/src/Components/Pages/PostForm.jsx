import React, { useEffect, useState } from "react";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";

const PostForm = () => {
  const [user, setUser] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData);
    console.log("userData", userData);
    console.log(user);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const PostData = { user, content };
    console.log(PostData);

    try {
      const response = await axios.post(
        "http://localhost:8080/PostRoute/createpost",
        {
          ...PostData,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUser("");
      setContent("");
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      padding={"2rem"}
      marginTop="5rem"
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
      borderRadius={"0.5rem"}
    >
      <form onSubmit={handleSubmit}>
        <Heading textAlign={"center"} marginBottom={"2rem"}>
          Post Form
        </Heading>
        {/* <FormControl id="title">
          <FormLabel>User-id</FormLabel>
          <Input
            type="text"
            value={user}
            onChange={(event) => setUser(event.target.value)}
            required
          />
        </FormControl> */}

        <FormControl id="content">
          <FormLabel>Content</FormLabel>
          <Textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            size="md"
            resize="none"
            rows={10}
          />
        </FormControl>

        <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default PostForm;
