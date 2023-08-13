import express from 'express'
const router = express.Router()
import products from '../data/products.js'
import asyncHandler from '../middleware/asyncHandler.js'


router.get('/', (req, res) => {
    res.send(products)
})

router.get('/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.send(product)
})

export default router