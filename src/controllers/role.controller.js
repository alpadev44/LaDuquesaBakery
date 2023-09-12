const {
    createRoleService, 
    getAllRoleService, 
    detailsRoleService,
    updateRoleService,
    deleteRoleService
 } = require('../services/roleService')

 async function createRoleController(req, res) {
    try {
      const role = await createRoleService(req.body);
      return res.status(201).json(role);
    } catch (err) {
      return res.status(400).json({ err: err.message });
    }
  }
  
  async function getAllRoleController(req, res) {
    try {
      const role = await getAllRoleService();
      return res.status(200).json(role);
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  }
  
  async function detailsRoleController(req, res) {
    try {
      const role = await detailsRoleService(req.params.id);
      if (role) {
        return res.status(200).json(role);
      } else {
        return res.status(404).json({ message: "Role not found" });
      }
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  }
  
  async function updateRoleController(req, res) {
    try {
      const role = await updateRoleService(req.params.id, req.body);
      return res.status(200).json(role);
    } catch (err) {
      return res.status(400).json({ err: err.message });
    }
  }
  
  async function deleteRoleController(req, res) {
    try {
      await deleteRoleService(req.params.id);
      return res.status(204).send();
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  }

  module.exports = {
    createRoleController,
    getAllRoleController,
    detailsRoleController,
    updateRoleController,
    deleteRoleController,
  };
  