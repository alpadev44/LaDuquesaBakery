const { 
    createCityService, 
    getAllCityService, 
    detailsCityService, 
    updateCityService, 
    deleteCityService
} = require('../services/cityService.js')

async function createCityController(req, res) {
    try {
        const city = await createCityService(req.body)
        return res.status(201).json(city)
    }
    catch(error) {
        return res.status(400).json({ error: error.message })
    }
}

async function getAllCityController(req, res) {
    try {
        const city = await getAllCityService()
        return res.status(200).json(city)
    }
    catch(error) {
        return res.status(400).json({ error: error.message })
    }
}

async function detailsCityController(req, res) {
    try {
        const city = await detailsCityService(req.params.id)
        if(city) {
            return res.status(200).json(city)
        }
        else {
            return res.status(404).json({ message: 'City not found' })
        }
    }
    catch(error) {
        return res.status(500).json({ error: error.message })
    }
}

async function updateCityController(req, res) {
    try {
        const city = await updateCityService(req.params.id, req.body)
        return res.status(200).json(city)
    }
    catch (err) {
        return res.status(400).json({ err: err.message });
    }
}

async function deleteCityController(req, res) {
    try {
        await deleteCityService(req.params.id)
        return res.status(204).send()
    }
    catch (err) {
        return res.status(400).json({ err: err.message });
    }
}

module.exports = { 
    createCityController,
    getAllCityController, 
    detailsCityController, 
    updateCityController, 
    deleteCityController
}