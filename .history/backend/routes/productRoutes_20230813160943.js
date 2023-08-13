import express from 'express'
const router = express.Router()
import products from '../data/products.js'
import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/productModel.js'


router.get('/', asyncHandler(async(req, res) => {
    res.send(products)
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.send(product)
}))

export default router