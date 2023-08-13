import asyncHandler from '../middleware/asyncHandler.js'

const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find({}) // this will return all of them
    res.send(products)
})

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