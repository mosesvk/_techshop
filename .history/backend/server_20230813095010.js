import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
const port = process.env.PORT || 5500

const app = express()

app.get('/', (req, res) => {
    res.send('app is running')
})

app.get('/api/products', (req, res) => {
    res.send(products)
})

app.get('/api/product/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.send(product)
})

app.listen(port, () => console.log(`Server running on Port ${port}`))