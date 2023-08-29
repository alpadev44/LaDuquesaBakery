const SubCategory = require('../../config/db.js').SubCategory;

async function createSubCategoryService(data) {
  try {
    console.log(data);
    let subCategory = await SubCategory.create(data);
    return subCategory;
  } catch (error) {
    throw error;
  }
}

async function getAllSubCategoryService() {
  try {
    return await subCategory.findAll();
  } catch (err) {
    throw err;
  }
}

async function detailsSubCategoryService(id) {
  try {
    return await subCategory.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function updateSubCategoryService(id, data) {
  try {
    await subCategory.update(data, { where: { id: id } });
    return await this.details(id);
  } catch (err) {
    throw err;
  }
}

async function deleteSubCategoryService(id) {
  try {
    return await subCategory.destroy({ where: { id: id } });
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createSubCategoryService,
  getAllSubCategoryService,
  detailsSubCategoryService,
  updateSubCategoryService,
  deleteSubCategoryService,
};
