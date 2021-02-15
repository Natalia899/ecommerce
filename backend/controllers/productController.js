
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

const getProducts = asyncHandler( async (req, res) => {
const products = await Product.find({})
console.log(products);
res.send(products)
})

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(product) {

        res.send(product)
    } else {

        res.status(404)
        throw new Error ('Product not found')
    }
})

export {  getProducts, getProductById }