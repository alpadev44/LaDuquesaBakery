const { 
    createProductService, 
    getAllProductService, 
    detailsProductService, 
    updateProductService, 
    deleteProductService
} = require('../services/productService.js')

async function createProductController(req, res) {
    try {
        const product = await createProductService(req.body)
        return res.status(201).json(product)
    }
    catch(error) {
        return res.status(400).json({ error: error.message })
    }
}

async function getAllProductController(req, res) {
    try {
        const product = await getAllProductService()
        return res.status(200).json(product)
    }
    catch(error) {
        return res.status(400).json({ error: error.message })
    }
}

async function detailsProductController(req, res) {
    try {
        const product = await detailsProductService(req.params.id)
        if(product) {
            return res.status(200).json(product)
        }
        else {
            return res.status(404).json({ message: 'Product not found' })
        }
    }
    catch(error) {
        return res.status(500).json({ error: error.message })
    }
}

async function updateProductController(req, res) {
    try {
        const product = await updateProductService(req.params.id, req.body)
        return res.status(200).json(product)
    }
    catch (err) {
        return res.status(400).json({ err: err.message });
    }
}

async function deleteProductController(req, res) {
    try {
        await deleteProductService(req.params.id)
        return res.status(204).send()
    }
    catch (err) {
        return res.status(400).json({ err: err.message });
    }
}

module.exports = { 
    createProductController,
    getAllProductController, 
    detailsProductController, 
    updateProductController, 
    deleteProductController
}