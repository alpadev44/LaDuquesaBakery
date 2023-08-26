const { 
    createCategoryService, 
    getAllCategoryService, 
    detailsCategoryService, 
    updateCategoryService, 
    deleteCategoryService
} = require('../services/categoryService.js')

async function createCategoryController(req, res) {
    try {
        const category = await createCategoryService(req.body)
        return res.status(201).json(category)
    }
    catch(error) {
        return res.status(400).json({ error: error.message })
    }
}

async function getAllCategoryController(req, res) {
    try {
        const category = await getAllCategoryService()
        return res.status(200).json(category)
    }
    catch(error) {
        return res.status(400).json({ error: error.message })
    }
}

async function detailsCategoryController(req, res) {
    try {
        const category = await detailsCategoryService(req.params.id)
        if(category) {
            return res.status(200).json(category)
        }
        else {
            return res.status(404).json({ message: 'Category not found' })
        }
    }
    catch(error) {
        return res.status(500).json({ error: error.message })
    }
}

async function updateCategoryController(req, res) {
    try {
        const category = await updateCategoryService(req.params.id, req.body)
        return res.status(200).json(category)
    }
    catch (err) {
        return res.status(400).json({ err: err.message });
    }
}

async function deleteCategoryController(req, res) {
    try {
        await deleteCategoryService(req.params.id)
        return res.status(204).send()
    }
    catch (err) {
        return res.status(400).json({ err: err.message });
    }
}

module.exports = { 
    createCategoryController,
    getAllCategoryController, 
    detailsCategoryController, 
    updateCategoryController, 
    deleteCategoryController
}