const express  = require('express') 
const { 
    createCityController,
    getAllCityController, 
    detailsCityController, 
    updateCityController, 
    deleteCityController
} = require('../controllers/cityController.js')

const cityRouter = express.Router()

cityRouter.post('/create', createCityController)
cityRouter.get('/', getAllCityController)
cityRouter.get('/:id', detailsCityController)
cityRouter.put('/:id', updateCityController)
cityRouter.delete('/:id', deleteCityController)

module.exports = cityRouter