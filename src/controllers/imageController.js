const {
    createImageService, 
    getAllImageService, 
    detailsImageService,
    updateImageService,
    deleteImageService
 } = require('../services/imageService.js')

async function createImageController(req, res) {
    try {
        const image = await createImageService(req.body)
        return res.status(201).json(image)
    }
    catch(error) {
        return res.status(400).json({ error: error.message })
    }
}

async function getAllImageController(req, res) {
    try {
        const image = await getAllImageService()
        return res.status(200).json(image)
    }
    catch(error) {
        return res.status(400).json({ error: error.message })
    }
}

async function detailsImageController(req, res) {
    try {
        const image = await detailsImageService(req.params.id)
        if(image) {
            return res.status(200).json(image)
        }
        else {
            return res.status(404).json({ message: 'Image not found' })
        }
    }
    catch(error) {
        return res.status(500).json({ error: error.message })
    }
}

async function updateImageController(req, res) {
    try {
        const image = await updateImageService(req.params.id, req.body)
        return res.status(200).json(image)
    }
    catch (err) {
        return res.status(400).json({ err: err.message });
    }
}

async function deleteImageController(req, res) {
    try {
        await deleteImageService(req.params.id)
        return res.status(204).send()
    }
    catch (err) {
        return res.status(400).json({ err: err.message });
    }
}

module.exports = { 
    createImageController,
    getAllImageController, 
    detailsImageController, 
    updateImageController, 
    deleteImageController
}