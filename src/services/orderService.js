const Product = require('../../config/db.js').Product;
const User = require('../../config/db.js').User;
const Order = require('../../config/db.js').Order;
const {invoice} = require('../utils/invoicing.js');

async function createOrderService({
    orderTackingNumber,
    shoppingCartId,
    customerService,
    products,
    bonus,
    user_id,
    products_id
}) {
    try {
        const invoicing =  invoice(products, bonus);

        console.log(invoicing.total)

        let order = await Order.create({ 
            orderTackingNumber, 
            shoppingCartId, 
            customerService, 
            total: invoicing.total,
            bonus,
            subtotal: invoicing.subTotal, })

        await order.setProducts(products_id)
        await order.setUser(user_id)
    
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