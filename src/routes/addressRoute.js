const express  = require('express') 
const { createAddressController, getAllAddressController, detailsAddressController, updateAddressController, deleteAddressController } = require('../controllers/addressController')

const addressRouter = express.Router()

addressRouter.post('/create', createAddressController)
addressRouter.get('/', getAllAddressController)
addressRouter.get('/:id', detailsAddressController)
addressRouter.put('/:id', updateAddressController)
addressRouter.delete('/:id', deleteAddressController)

module.exports = addressRouter
