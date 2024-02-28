const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authenticateJWT = require("../middleware/authMiddleware");

module.exports = {
  corsOptions: cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200,
    exposedHeaders: "**",
  }),
  bodyParse: bodyParser.json(),
  expressJson: express.json(),
  authenticateJWT: authenticateJWT,
};
