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

    res.send('Auth User')
})

export {getProducts, getSingleProdut}