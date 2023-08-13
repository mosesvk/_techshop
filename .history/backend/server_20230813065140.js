import express from 'express'
import products from './data/products.js'
const port = 5500

const app = express()

app.get('/', (req, res) => {
    res.send('app is running')
})

app.listen(port, () => console.log(`Server running on Port ${port}`))