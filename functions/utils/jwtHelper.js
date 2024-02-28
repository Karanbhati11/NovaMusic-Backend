const jwt = require("jsonwebtoken");
const secret = "mkmkmk";

const generateToken = (payload) => {
  console.log(payload);
  return jwt.sign(payload, secret);
};
const verifyToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, secret);
    console.log(decodedToken);
    return decodedToken;
  } catch (error) {
    console.error("Token verification failed:", error);
    throw new Error("Invalid token");
  }
};

module.exports = { generateToken, verifyToken };
