const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/authMiddleware");

const {
  registerUser,
  loginUser,
  getAuth,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/auth", auth, getAuth);

module.exports = router;
