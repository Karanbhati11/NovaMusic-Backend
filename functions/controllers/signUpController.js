const userModel = require("../models/userModel");

module.exports = async (req, res) => {
  const { userName, email, password, cPassword } = req.body;

  // Validation rules
  const errors = {};
  if (!userName) {
    errors.userName = "Username is required";
  }
  if (!email) {
    errors.email = "Email is required";
  }
  if (!password) {
    errors.password = "Password is required";
  }
  if (password !== cPassword) {
    errors.cPassword = "Passwords do not match";
  }

  // Check if there are any validation errors
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    // Check if email already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Create a new user instance
    const newUser = new userModel({
      userName,
      email,
      password,
    });

    // Save the user to the database
    await newUser.save();

    // Respond with success message
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error saving user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
