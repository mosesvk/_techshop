import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
const port = process.env.PORT || 5500

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('app is running')
})



app.listen(port, () => console.log(`Server running on Port ${port}`))