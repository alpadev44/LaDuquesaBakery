const Product = require('../../models/product.js').Product
const User = require('../../models/index.js').User
const Order = require('../../models/index.js').Order

async function createOrderService({
    orderTackingNumber,
    shoppingCartId,
    customerService,
    subtotal,
    bonus,
    total,
    product,
    user
}) {
    try {
        let order = await Order.create({ orderTackingNumber, shoppingCartId, customerService, subtotal, bonus, total })
        await order.setProduct(product)
        await order.setUser(user)
        return order
    }
    catch(error) {
        throw error
    }
}

async function getAllOrderService() {
    try {
        return await Order.findAll()
    }
    catch(error) {
        throw error
    }
}

async function detailsOrderService(id) {
    try {
        return await Order.findByPk(id, {
            include: [{
                model: Product, User
            }]
        })
    }
    catch(error) {
        throw error
    }
}

async function updateOrderService(id,data) {
    try { 
        await Order.update( data, { where: { id: id } })
        return await this.details(id)
    } 
    catch(error) {
        throw error
    }
}

async function deleteOrderService(id) {
    try {
        return await Order.destroy( data, { where: { id: id } })
    }
    catch(error) {
        throw error
    }
}

module.exports = { 
    createOrderService, 
    getAllOrderService, 
    detailsOrderService, 
    updateOrderService, 
    deleteOrderService
}