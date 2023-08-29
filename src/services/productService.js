const Product = require('../../config/db.js').Product
const Category = require('../../config/db.js').Category
const City = require('../../config/db.js').City
const Image = require('../../config/db.js').Image

async function createProductService({
    name,
    sku,
    price,
    ingredients,
    discount,
    score,
    dataCreated,
    category,
    city,
    image
}) {
    try {
        let product = await Product.create({ name, sku, price, ingredients, discount, score, dataCreated })
        await product.setCategory(category)
        await product.setCity(city)
        await product.setImage(image)
        return product
    }
    catch(error) {
        throw error
    }
}

async function getAllProductService() {
    try {
        return await Product.findAll()
    }
    catch(error) {
        throw error
    }
}

async function detailsProductService(id) {
    try {
        return await Product.findByPk(id, {
            include: [{
                model: Category, City, Image
            }]
        })
    }
    catch(error) {
        throw error
    }
}

async function updateProductService(id,data) {
    try { 
        await Product.update( data, { where: { id: id } })
        return await this.details(id)
    } 
    catch(error) {
        throw error
    }
}

async function deleteProductService(id) {
    try {
        return await Product.destroy( data, { where: { id: id } })
    }
    catch(error) {
        throw error
    }
}



module.exports = { 
    createProductService, 
    getAllProductService, 
    detailsProductService, 
    updateProductService, 
    deleteProductService
}