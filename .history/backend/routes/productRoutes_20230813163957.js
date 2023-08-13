import express from 'express'
const router = express.Router()
import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/productModel.js'
import { getProducts } from '../controllers/productControllers.js'


router.get('/', getProducts)

router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.send(product)
    } else {
        res.status(404)
        throw new Error('Resource Not Found')
    }

    res.status(404).json({message: 'Product Not Found'})
}))

export default router