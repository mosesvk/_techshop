import express from 'express'
const router = express.Router()
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser
  } from '../controllers/userController.js'


router.route('/').get(getProducts)
router.route('/:id').get(getSingleProdut)

export default router