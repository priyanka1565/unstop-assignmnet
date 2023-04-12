
const express = require("express");
const router = express.Router();
// Import controller for user
const createUser  = require("../controller/UserController"); 
router.post("/createUser", createUser);

module.exports = router;