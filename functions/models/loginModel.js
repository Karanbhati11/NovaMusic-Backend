const mongoose = require("mongoose");

const loginModel = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("loginModel", loginModel);
