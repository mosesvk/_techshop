import express from 'express'

const port = 5000

const app = express()

app.get('/', (req, res) => {
    res.send('app is running')
})

app.listen(port, () => console.log(`Server running on Port ${port}`))