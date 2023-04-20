import { Container, Center, HStack, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Container maxW={"100%"} backgroundColor={"cyan"} padding={"1rem"}>
        <Center>
          <HStack spacing={"5rem"}>
            <Button>
              <Link to={`/`}>User-Form</Link>
            </Button>
            <Button>
              <Link to={`/postForm`}>Post</Link>
            </Button>
            <Button>
              <Link>hhh</Link>
            </Button>
            <Button>
              <Link>hhh</Link>
            </Button>
            <Button>
              <Link>hh</Link>
            </Button>
            <Button>
              <Link>hh</Link>
            </Button>
          </HStack>
        </Center>
      </Container>
    </div>
  );
};

export default Home;
