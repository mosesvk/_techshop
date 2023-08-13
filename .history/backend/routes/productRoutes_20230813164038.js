import express from 'express'
const router = express.Router()
import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/productModel.js'
import { getProducts, getSingleProdut } from '../controllers/productControllers.js'


router.get('/', getProducts)

router.get('/:id', getSingleProdut)

export default router