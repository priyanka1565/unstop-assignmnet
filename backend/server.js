const express = require("express");
const mongoose = require("mongoose");

const connect = require("./connection/database")

const app = express();

app.listen(8080, async() => {
    try {
        connect.connect()
         console.log(`http://localhost:8080`);
        
    }
    catch (error) {
   console.log("error",error)
        
    }
   
});