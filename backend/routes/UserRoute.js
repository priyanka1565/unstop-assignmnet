
const express = require("express");
const router = express.Router();
// Import controller for user
const {
  createUser,
  getUserById,
 
} = require("../controller/UserController")
router.post("/createUser", createUser);
router.get("/:id", getUserById);


module.exports = router;