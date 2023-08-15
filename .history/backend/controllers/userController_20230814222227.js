import asyncHandler from '../middleware/asyncHandler.js'
import User from '../models/userModel.js'

// @desc    Auth User & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async(req, res) => {

    res.send('Auth User')
})

// @desc    Register User & GET token
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async(req, res) => {

    res.send('Register User')
})

// @desc    Logout User & Clear cookie
// @route   POST /api/users/logout
// @access  Private - user needs to be logged in
const logoutUser = asyncHandler(async(req, res) => {

    res.send('Logout User')
})

// @desc    Get User Profile
// @route   GET /api/users/profile
// @access  Public
const getUserProfile = asyncHandler(async(req, res) => {

    res.send('Auth User')
})

export {getProducts, getSingleProdut}