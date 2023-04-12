const User = require("../model/UserModel");

//create a user

const createUser = async (req, res) => {
  const { name, email, bio } = req.body;
  try {
    const newUser = new User({ name, email, bio });
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

//passing the id in params and get the user

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUserById,
};
  