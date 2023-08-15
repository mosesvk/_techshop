import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc    Auth User & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const object = JSON.stringify(req)
  res.send(object);
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
