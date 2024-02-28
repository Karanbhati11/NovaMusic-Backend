const express = require("express");
const router = express.Router();
const playListController = require("../controllers/playListController");

router.get("/", playListController);

module.exports = router;
