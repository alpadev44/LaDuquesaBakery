const express  = require('express') 
const { 
    createProductController,
    getAllProductController, 
    detailsProductController, 
    updateProductController, 
    deleteProductController
} = require('../controllers/productController.js')

const productRouter = express.Router()

productRouter.post('/create', createProductController)
productRouter.get('/', getAllProductController)
productRouter.get('/:id', detailsProductController)
productRouter.put('/:id', updateProductController)
productRouter.delete('/:id', deleteProductController)

module.exports = productRouter