import asyncHandler from '../middleware/asyncHandler.js'
import User from '../models/userModel.js'

// @desc    Auth User & GET token
// @route   GET /api/users/login
// @access  Public
const authUser = asyncHandler(async(req, res) => {

    res.send('Auth User')
})


export {getProducts, getSingleProdut}