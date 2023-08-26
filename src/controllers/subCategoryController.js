const {
    createSubCategoryService, 
    getAllSubCategoryService, 
    detailsSubCategoryService,
    updateSubCategoryService,
    deleteSubCategoryService
 } = require('../services/subCategoryService')

 async function createSubCategoryController(req, res) {
    try {
      const subCategory = await createSubCategoryService(req.body);
      return res.status(201).json(subCategory);
    } catch (err) {
      return res.status(400).json({ err: err.message });
    }
  }
  
  async function getAllSubCategoryController(req, res) {
    try {
      const subCategory = await getAllSubCategoryService();
      return res.status(200).json(subCategory);
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  }
  
  async function detailsSubCategoryController(req, res) {
    try {
      const subCategory = await detailsSubCategoryService(req.params.id);
      if (subCategory) {
        return res.status(200).json(subCategory);
      } else {
        return res.status(404).json({ message: "Address not found" });
      }
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  }
  
  async function updateSubCategoryController(req, res) {
    try {
      const subCategory = await updateSubCategoryService(req.params.id, req.body);
      return res.status(200).json(subCategory);
    } catch (err) {
      return res.status(400).json({ err: err.message });
    }
  }
  
  async function deleteSubCategoryController(req, res) {
    try {
      await deleteSubCategoryService(req.params.id);
      return res.status(204).send();
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  }
  
  module.exports = {
    createSubCategoryController,
    getAllSubCategoryController,
    detailsSubCategoryController,
    updateSubCategoryController,
    deleteSubCategoryController,
  };
  