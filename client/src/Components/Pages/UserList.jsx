import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Button,
  useDisclosure,
  Heading,
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const BasicUsage = ({ isOpen, onClose, onOpen, users }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box key={users.id}>
              <Text>{users.name}</Text>
              <Text>{users.bio}</Text>
              <Text>{users.id}</Text>
              <Text>{users.email}</Text>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

function InitialFocus({
  isOpen,
  onClose,
  onOpen,
  setName,
  setBio,
  name,
  bio,
  editUser,
}) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Bio</FormLabel>
              <Input
                placeholder="Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={editUser}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const UserList = () => {
  const [users, setUsers] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: modalIsOpen,
    onOpen: openModal,
    onClose: closeModal,
  } = useDisclosure();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [state, setState] = useState({});
  const [id, setId] = useState("");

  const getUsers = () => {
    axios
      .get(`https://adobebackend-mjc1.onrender.com/users`)
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const fetchUsers = (id) => {
    axios
      .get(`https://adobebackend-mjc1.onrender.com/users/${id}`)
      .then((response) => setState(response.data))
      .catch((error) => console.log(error));
  };

  const editUser = () => {
    const data = { name, bio };
    console.log(data);
    axios
      .put(`http://localhost:8080/UserRoute/${id}`, { ...data })
      .then((response) => getUsers())
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/UserRoute/${id}`).then(() => {
      getUsers();
    });
  };

  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Bio</Th>
            <Th>User-id</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.bio}</Td>
              <Td>{user.id}</Td>
              <Td display={"flex"} justifyContent={"space-around"}>
                <IconButton
                  onClick={() => {
                    onOpen();
                    fetchUsers(user.id);
                  }}
                  icon={<FaEye />}
                  aria-label="View user"
                />
                <IconButton
                  onClick={() => {
                    openModal();
                    setId(user.id);
                  }}
                  icon={<FaEdit />}
                  aria-label="Edit user"
                />
                <IconButton
                  onClick={() => handleDelete(user.id)}
                  icon={<FaTrash />}
                  aria-label="Delete user"
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <BasicUsage
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        users={state}
      />
      <InitialFocus
        isOpen={modalIsOpen}
        onClose={closeModal}
        onOpen={openModal}
        setName={setName}
        setBio={setBio}
        name={name}
        bio={bio}
        editUser={editUser}
      />
    </>
  );
};

export default UserList;
