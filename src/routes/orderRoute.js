const express  = require('express') 
const { 
    createOrderController,
    getAllOrderController, 
    detailsOrderController, 
    updateOrderController, 
    deleteOrderController
} = require('../controllers/orderController.js')

const orderRouter = express.Router()

orderRouter.post('/create', createOrderController)
orderRouter.get('/', getAllOrderController)
orderRouter.get('/:id', detailsOrderController)
orderRouter.put('/:id', updateOrderController)
orderRouter.delete('/:id', deleteOrderController)

module.exports = orderRouter