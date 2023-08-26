const express  = require('express') 
const  { 
    createUserController,
    getAllUserController, 
    detailsUserController, 
    updateUserController, 
    deleteUserController
} = require('../controllers/userController.js')

const userRouter = express.Router()

userRouter.post('/create', createUserController)
userRouter.get('/', getAllUserController)
userRouter.get('/:id', detailsUserController)
userRouter.put('/:id', updateUserController)
userRouter.delete('/:id', deleteUserController)

module.exports = userRouter