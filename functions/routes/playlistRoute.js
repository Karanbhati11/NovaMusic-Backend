const express = require("express");
const router = express.Router();
const playListController = require("../controllers/playListController");
const { authenticateJWT } = require("../middleware/middleware");

router.get("/", authenticateJWT, playListController);

module.exports = router;
