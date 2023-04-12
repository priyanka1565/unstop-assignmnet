
const express = require("express");
const router = express.Router();
// Import controller for user
const {
  createUser,
  getUserById,
  deleteUser,
  updateUserById,
} = require("../controller/UserController");
router.post("/createUser", createUser);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);
router.put("/:id", updateUserById);


module.exports = router;