const express = require("express");
const { fetchUserById,  fetchAlltheUsers, fetchUserBySpecificId } = require("../controller/UserController");

const { isAuth } = require("../services/common");
const router = express.Router();

router.get("/own", isAuth(), fetchUserById);
router.get("/:id", isAuth(), fetchUserBySpecificId);
router.get("/", isAuth(), fetchAlltheUsers);

module.exports = router;
