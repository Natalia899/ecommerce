
import User from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

const authUser = asyncHandler( async (req, res) => {

})

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(product) {

        res.json(product)
    } else {

        res.status(404)
        throw new Error ('Product not found')
    }
})

export {  getProducts, getProductById }