import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/productModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find({}) // this will return all of them
    res.send(products)
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getSingleProdut = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.send(product)
    } else {
        res.status(404)
        throw new Error('Resource Not Found')
    }

    res.status(404).json({message: 'Product Not Found'})
})

export {getProducts, getSingleProdut}