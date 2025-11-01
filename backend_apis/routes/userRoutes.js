const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../../middlewares/authMiddleware");
const router = express.Router();

router.post("/signup", userController.signUp);
router.post("/login", userController.login);
router.get("/", authMiddleware.protect, userController.getAllUsers);

module.exports = router;