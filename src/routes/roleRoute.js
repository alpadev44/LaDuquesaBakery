const express  = require('express')
 const {
    createRoleController,
    getAllRoleController,
    detailsRoleController,
    updateRoleController,
    deleteRoleController,
  } = require('../controllers/roleController')

  const roleRouter = express.Router()

roleRouter.post('/create', createRoleController)
roleRouter.get('/', getAllRoleController)
roleRouter.get('/:id', detailsRoleController)
roleRouter.put('/:id', updateRoleController)
roleRouter.delete('/:id', deleteRoleController)

module.exports = roleRouter