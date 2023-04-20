const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./routes/UserRoute");
const PostRoute = require("./routes/PostRoute")
const User = require("./model/UserModel")
const Post = require("./model/PostMoel")
const app = express()

const connect = require("./connection/database")

app.use(express.json());
app.use("/UserRouter", UserRouter); 
app.use("/PostRoute", PostRoute); 




app.listen(8080, async() => {
    try {
        connect.connect()
         console.log(`http://localhost:8080`);
        
    }
    catch (error) {
   console.log("error",error)
        
    }
   

});
