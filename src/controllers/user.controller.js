const { 
    createUserService, 
    getAllUserService, 
    detailsUserService, 
    updateUserService, 
    deleteUserService
} = require('../services/userService.js')

async function createUserController(req, res) {
    try {
        const user = await createUserService(req.body)
        return res.status(201).json(user)
    }
    catch(error) {
        return res.status(400).json({ error: error.message })
    }
}

async function getAllUserController(req, res) {
    try {
        const user = await getAllUserService()
        return res.status(200).json(user)
    }
    catch(error) {
        return res.status(400).json({ error: error.message })
    }
}

async function detailsUserController(req, res) {
    try {
        const user = await detailsUserService(req.params.id)
        if(user) {
            return res.status(200).json(user)
        }
        else {
            return res.status(404).json({ message: 'User not found' })
        }
    }
    catch(error) {
        return res.status(500).json({ error: error.message })
    }
}

async function updateUserController(req, res) {
    try {
        const user = await updateUserService(req.params.id, req.body)
        return res.status(200).json(user)
    }
    catch (err) {
        return res.status(400).json({ err: err.message });
    }
}

async function deleteUserController(req, res) {
    try {
        await deleteUserService(req.params.id)
        return res.status(204).send()
    }
    catch (err) {
        return res.status(400).json({ err: err.message });
    }
}

module.exports = { 
    createUserController,
    getAllUserController, 
    detailsUserController, 
    updateUserController, 
    deleteUserController
}