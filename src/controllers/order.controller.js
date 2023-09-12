const { 
    createOrderService, 
    getAllOrderService, 
    detailsOrderService, 
    updateOrderService, 
    deleteOrderService
} = require('../services/orderService.js')

async function createOrderController(req, res) {
    try {
        const order = await createOrderService(req.body)
        return res.status(201).json(order)
    }
    catch(error) {
        return res.status(400).json({ error: error.message })
    }
}

async function getAllOrderController(req, res) {
    try {
        const order = await getAllOrderService()
        return res.status(200).json(order)
    }
    catch(error) {
        return res.status(400).json({ error: error.message })
    }
}

async function detailsOrderController(req, res) {
    try {
        const order = await detailsOrderService(req.params.id)
        if(order) {
            return res.status(200).json(order)
        }
        else {
            return res.status(404).json({ message: 'Order not found' })
        }
    }
    catch(error) {
        return res.status(500).json({ error: error.message })
    }
}

async function updateOrderController(req, res) {
    try {
        const order = await updateOrderService(req.params.id, req.body)
        return res.status(200).json(order)
    }
    catch (err) {
        return res.status(400).json({ err: err.message });
    }
}

async function deleteOrderController(req, res) {
    try {
        await deleteOrderService(req.params.id)
        return res.status(204).send()
    }
    catch (err) {
        return res.status(400).json({ err: err.message });
    }
}

module.exports = { 
    createOrderController,
    getAllOrderController, 
    detailsOrderController, 
    updateOrderController, 
    deleteOrderController
}