import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
dotenv.config()

connectDB()

const app = express()

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get
    ('/products', (req, res) => {
        res.send(products)
    })

app.get('/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.send(product)
})


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))