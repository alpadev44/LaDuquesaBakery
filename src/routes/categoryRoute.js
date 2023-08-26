const express  = require('express') 
const { 
    createCategoryController,
    getAllCategoryController, 
    detailsCategoryController, 
    updateCategoryController, 
    deleteCategoryController
} = require('../controllers/categoryController.js')

const categoryRouter = express.Router()

categoryRouter.post('/create', createCategoryController)
categoryRouter.get('/', getAllCategoryController)
categoryRouter.get('/:id', detailsCategoryController)
categoryRouter.put('/:id', updateCategoryController)
categoryRouter.delete('/:id', deleteCategoryController)

module.exports = categoryRouter