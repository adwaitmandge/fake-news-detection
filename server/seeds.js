const mongoose = require("mongoose");
const User = require("./models/userModel");

mongoose
  .connect("mongodb://127.0.0.1:27017/")
  .then(() => {
    console.log("Connected to MONGODB successfully");
  })
  .catch((err) => {
    console.log("Couldn't connect to db");
    console.log(err);
  });

const addUser = async() => {
    const newUser = {
        username:"adwaitmandge",
        email:"adwaitmandge@gmail.com",
        
    }
}