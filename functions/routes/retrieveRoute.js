const express = require("express");
const router = express.Router();
const retrieveController = require("../controllers/retrieveController");

router.get("/", retrieveController);

module.exports = router;
