import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
import { error } from 'console'
const port = process.env.PORT || 5500

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('app is running')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)



app.listen(port, () => console.log(`Server running on Port ${port}`))