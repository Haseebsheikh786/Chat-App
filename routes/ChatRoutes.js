const express = require("express");
const passport = require("passport");

const { isAuth } = require("../services/common");
const router = express.Router();
const {
  fetchChats,
  createChat,
  fetchChatById,
} = require("../controller/chatController");

router.post("/", isAuth(), createChat);
router.get("/:userId", isAuth(), fetchChats);
router.get("/find/:firstId/:secondId", isAuth(), fetchChatById);

module.exports = router;
