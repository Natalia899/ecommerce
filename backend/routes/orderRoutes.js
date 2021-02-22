import express from 'express'
const router = express.Router()
import {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    getOrders
} from '../controllers/orderController.js'
import { protect } from '../midleware/authMiddleware.js'


router.route('/myorders').get(protect, getOrders)
router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router