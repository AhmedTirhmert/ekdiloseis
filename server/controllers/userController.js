const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

// @desc    Regiter User
// @route   GET /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const userExiste = await User.findOne({ email });
  if (userExiste) {
    res.status(400);
    throw new Error("Email already exists");
  }
  let hashedPassword = await hashPassword(password);
  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  if (newUser) {
    res.status(201).json({
      _id: newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      token: generateToken(newUser.id),
    });
  }
});

// @desc    Login User
// @route   GET /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  let { email, password } = req.body;
  const user = await User.findOne({ email: email });
  let passwpordCheck = await bcrypt.compare(password, user.password);
  if (user && passwpordCheck) {
    res.status(200).json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password!");
  }
});

// @desc    Get authenticated user
// @route   GET /api/users/auth
// @access  Private
const getAuth = asyncHandler(async (req, res) => {
  res.status(200).json((req.user));
});

// HELPER FUNCTIONS
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7 days" });
};
module.exports = {
  loginUser,
  registerUser,
  getAuth,
};
