
const express = require("express");
const router = express.Router();
// Import controller for user
const {
  createUser,
  getUserById,
  deleteUser,
} = require("../controller/UserController");
router.post("/createUser", createUser);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);


module.exports = router;