const Product = require('../../config/db.js').Product
const User = require('../../config/db.js').User
const Order = require('../../config/db.js').Order

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
        const subTotalValue = await subtotal({ product });
        const totalValue = await total({ product, bonus });

        let order = await Order.create({ 
            orderTackingNumber, 
            shoppingCartId, 
            customerService, 
            subtotal: subTotalValue, 
            bonus, 
            total: totalValue })

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

function subtotal(order) {
    let subtotalProduct = order.product
                   .map(product => parseFloat(product.price * product.discount) || 0)
                   .reduce((sum, price) => sum + price, 0); 

    return Math.round(subtotal);
}

function total(order) {
    const subtotal = subtotal(order) 
    let bonus = order.bonus

    return subtotal - bonus
}
/*


    const calculateSubTotal = (receipt) => {
    const subtotal = receipt.products
        .map(product => parseFloat(product.price) || 0) // Convierte el precio a float y usa 0 si es nulo o no válido
        .reduce((sum, price) => sum + price, 0);       // Suma todos los precios

    return Math.round(subtotal);
}

 */

module.exports = { 
    createOrderService, 
    getAllOrderService, 
    detailsOrderService, 
    updateOrderService, 
    deleteOrderService
}