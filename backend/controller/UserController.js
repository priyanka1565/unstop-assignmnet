const User = require("../model/UserModel");

//create a user

const CreateUser = async (req, res) => {
    const { name, email, bio } = req.body;
    try {
        const newUser = new User({ name, email, bio });
        const saveUser = await newUser.save();
        res.status(201).json(saveUser)
        
    }
    catch (error) {
        res.status(401).json({ message: error.message });
        
    }

}
module.exports = CreateUser;