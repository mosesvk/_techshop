import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
// @desc    Auth User & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }); // email: email

  //matchPassword is connecting to line 27 in the UserModel
  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d'
    });

    // set JWT as HTTP only Cookie
    res.cookie('jwt', token, {
      httpOnly: true, // only true for production
      secure: process.env.NODE_ENV !== 'development', // only for production
      sameSite: 'strict', // prevent attacks
      maxAge: 30 * 24 * 60 * 60 * 1000 // 30days in miliseconds
    })

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    });
  } else {
    res.status(401);
    throw new Error('Invalid Email or Password');
  }
});

// @desc    Register User & GET token
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.send('Register User');
});

// @desc    Logout User & Clear cookie
// @route   POST /api/users/logout
// @access  Private - user needs to be logged in
const logoutUser = asyncHandler(async (req, res) => {
  res.send('Logout User');
});

// @desc    Get User Profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('Get User Profile');
});

// @desc    Update User Profile
// @route   PUT /api/users/profile
// we don't need the :id here because we will already have access to the profile details through the Token that will already be stored after login
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('Update User Profile');
});

// @desc    Get Users - Admin
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send('Get Users');
});

// @desc    Get User by Id
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send('Get User By Id');
});

// @desc    Update User by Id
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send('Update User');
});

// @desc    Delete Users - Admin
// @route   GET /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send('Delete User');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser
};
