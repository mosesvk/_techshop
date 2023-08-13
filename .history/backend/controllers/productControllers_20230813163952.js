import asyncHandler from '../middleware/asyncHandler.js'

const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find({}) // this will return all of them
    res.send(products)
})

export {getProducts}