const jwt = require("jsonwebtoken");
const secret = "mkmkmk";

const generateToken = (payload) => {
  console.log(payload);
  return jwt.sign(payload, secret);
};
const verifyToken = (token) => {
  try {
    const Ctoken = token.split(" ");
    const verifyToken = jwt.verify(Ctoken[1], secret);
    return verifyToken;
  } catch (error) {
    console.error("Token verification failed:", error);
    throw new Error("Invalid token");
  }
};

module.exports = { generateToken, verifyToken };
