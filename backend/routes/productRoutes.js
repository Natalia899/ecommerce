import express from 'express'
const router = express.Router()
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'


router.get('/', asyncHandler (async (req, res) => {
       const products = await Product.find({})
       //throw new Error('error no non')
       console.log(products[0]);
       res.send(products)
    }))


router.get('/:id', asyncHandler (async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(product) {

        res.send(product)
    } else {

        res.status(404)
        throw new Error ('Product not found')
    }
}))

export default router