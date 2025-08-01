const express = require("express");
const router = express.Router();
const User = require("../models/User"); // to use the User model for database operations
const { body, validationResult } = require("express-validator");
const { use } = require("react");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const fetchuser = require("../middleware/fetchuser");
const JWT_SECRET = 'quickquill'; // This should be stored in an environment variable in production

// Route 1: Create a user using POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    // this is the validation middleware using express-validator
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  async (req, res) => {
    // request and response from and to the user and this is syntax of express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //first check that users already exists or not
      // if user exists then return error
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "User with this email already exists" });
      }
      // else create a new user
      const salt = await bcrypt.genSalt(10); // generate a salt for hashing the password
      const secPass = await bcrypt.hash(req.body.password, salt); // hash the password with salt
      

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id // this is the id of the user which is created
        }
      };

      var authtoken = jwt.sign(data, JWT_SECRET); // this will create a token for the user using the user id and JWT_SECRET
      res.json({authtoken}); // this will return the user authtoken object in json format to the user
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).send("Internal Server Error");
    }
  }
);


// Route 2: Authenticate a user using POST "/api/auth/login". login required
router.post(
  "/login",
  [
    // this is the validation middleware using express-validator
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").exists().withMessage("Password cannot be empty"),
  ],
  async (req, res) => {
    // if any error occurs in the validation then return the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body; // destructuring the email and password from the request body
    try { // find the user with the given email
        let user = await User.findOne({ email});
        if (!user) { // if user does not exist then return error
            return res.status(400).json({ error: "Please try again with correct credentials" });
        }
        // if user exists then compare the password with the hashed password in the database
        // bcrypt.compare will return true if the password matches
        const passwordCompare = await bcrypt.compare(password, user.password); // compare the password with the hashed password in the database
        if (!passwordCompare) { // if password does not match then return error
            return res.status(400).json({ error: "Please try again with correct credentials" });
        }
        // if password matches then create a token for the user
        // this token will be used to authenticate the user in the future requests
        const data = {
            user: {
            id: user.id // this is the id of the user which is created
            }
        };

        var authtoken = jwt.sign(data, JWT_SECRET); // this will create a token for the user using the user id and JWT_SECRET
        res.json({authtoken}); // this will return the user authtoken object in json format to the user

    }catch (error) {
      console.error("Error during user login:", error);
      return res.status(500).send("Internal Server Error");
    }
  })

// Route 3: Get logged in user details using GET "/api/auth/getuser". Login required
router.post(
  "/getuser",
  // middleware to authenticate the user using the token
  fetchuser,
  async (req, res) => {
    try {
        const userId = req.user.id; // get the user id from the request object
        const user = await User.findById(userId).select("-password"); // find the user by id and exclude the password field
        res.send(user); // send the user details in the response
    } catch (error) {
      console.error("Error fetching user details:", error);
      return res.status(500).send("Internal Server Error");
        
    }
  })
module.exports = router;
