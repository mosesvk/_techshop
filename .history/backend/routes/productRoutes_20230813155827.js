import express from 'express'

const router = express.Router()

router.get('/api/products', (req, res) => {
    res.send(products)
})

router.get('/api/product/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.send(product)
})

export default router