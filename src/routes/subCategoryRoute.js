const express  = require('express') 
const {
    createSubCategoryController,
    getAllSubCategoryController,
    detailsSubCategoryController,
    updateSubCategoryController,
    deleteSubCategoryController,
  } = require('../controllers/subCategoryController')

const subCategoryRouter = express.Router()

subCategoryRouter.post('/create', createSubCategoryController)
subCategoryRouter.get('/', getAllSubCategoryController)
subCategoryRouter.get('/:id', detailsSubCategoryController)
subCategoryRouter.put('/:id', updateSubCategoryController)
subCategoryRouter.delete('/:id', deleteSubCategoryController)

module.exports = subCategoryRouter