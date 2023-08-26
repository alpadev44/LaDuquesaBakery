const express  = require('express') 
const { 
    createImageController,
    getAllImageController, 
    detailsImageController, 
    updateImageController, 
    deleteImageController
} = require('../controllers/imageController.js')

const imageRouter = express.Router()

imageRouter.post('/create', createImageController)
imageRouter.get('/', getAllImageController)
imageRouter.get('/:id', detailsImageController)
imageRouter.put('/:id', updateImageController)
imageRouter.delete('/:id', deleteImageController)

module.exports = imageRouter