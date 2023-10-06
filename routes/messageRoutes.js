const express = require("express");
const { allMessages, sendMessage } = require("../controller/messageController");

const { isAuth } = require("../services/common");
const router = express.Router();

router.get("/:chatId", isAuth(), allMessages);
router.post("/", isAuth(), sendMessage);

module.exports = router;
