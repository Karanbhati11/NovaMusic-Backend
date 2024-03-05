const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwtHelper = require("../utils/jwtHelper");

module.exports = async (req, res) => {
  const { emailOrUserName, password } = req.body;

  // Validation rules
  const errors = {};
  if (!emailOrUserName) {
    errors.emailOrUserName = "Email or username is requir ed";
  }
  if (!password) {
    errors.password = "Password is required";
  }

  // Check if there are any validation errors
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  // Find the user by email or username
  try {
    const user = await userModel.findOne({
      email: emailOrUserName,
    });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwtHelper.generateToken({
      email: user.email,
    });
    // Respond with success message and token
    return res
      .status(200)
      .json({ message: "Login successful", token, email: user.email });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
