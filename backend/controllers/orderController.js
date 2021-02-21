
import Order from '../models/orderModel.js'
import asyncHandler from 'express-async-handler'

const addOrderItems = asyncHandler(async (req, res) => {
    const { orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice } = req.body
       console.log(req.body)
    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items');
        return
    } else {
        console.log('here????')
        const order = new Order(
            {
                orderItems,
                user: req.user._id,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                taxPrice,
                shippingPrice,
                totalPrice
            }
        )
      //  console.log(order);
        const createdOrder = await order.save()
       // console.log(createOrder)
       // console.log('end')
        res.send(createdOrder)
       
    }
})



export { addOrderItems }