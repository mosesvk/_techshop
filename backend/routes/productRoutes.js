import express from 'express'
const router = express.Router()
import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/productModel.js'


router.get('/', asyncHandler(async(req, res) => {
    const products = await Product.find({}) // this will return all of them
    res.send(products)
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.send(product)
}))

export default router