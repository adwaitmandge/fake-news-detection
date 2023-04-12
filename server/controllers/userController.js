const User = require("../models/userModel");

const registerUser = async (req, res) => {
  try {
    console.log("INSIDE REGISTER USERS AT THE BACKEND");
    console.log("HERE");
    console.log(req.body);
    const { name, image } = req.body;
    console.log(name, image);
    console.log("Checking if the user is present in the database");
    const foundUser = await User.find({ username: name });
    console.log("The foundUser is ");
    console.log(foundUser);
    if (foundUser.length > 0) {
      console.log(foundUser);
      console.log("USER ALREADY EXISTS!");
      const response = { message: "FALIURE" };
      res.send(response);
    } else {
      console.log("About to insert the user in the database");
      const newUser = {
        username: name,
        image: image,
      };

      const insertedUser = await User.create(newUser);
      console.log("INSERTED USER IS ");
      console.log(insertedUser);
      res.send(insertedUser);
    }
  } catch (err) {
    console.log("ERROR OCCURRED WHILE REGISTERING USER AT THE BACKEND");
    console.error(err.message);
  }
};

module.exports = { registerUser };
