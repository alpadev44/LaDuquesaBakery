const SubCategory = require('../../models/product.js').SubCategory
const Category = require('../../models/index.js').Category


async function createCategoryService({
    name,
    description,
    url,
    subCategory
}) {
    try {
        let category = await Category.create({ name, description, url })
        await category.setSubCategory(subCategory)
        return category
    }
    catch(error) {
        throw error
    }
}

async function getAllCategoryService() {
    try {
        return await Category.findAll()
    }
    catch(error) {
        throw error
    }
}

async function detailsCategoryService(id) {
    try {
        return await Category.findByPk(id, {
            include: [{
                model: SubCategory
            }]
        })
    }
    catch(error) {
        throw error
    }
}

async function updateCategoryService(id,data) {
    try { 
        await Category.update( data, { where: { id: id } })
        return await this.details(id)
    } 
    catch(error) {
        throw error
    }
}

async function deleteCategoryService(id) {
    try {
        return await Category.destroy( data, { where: { id: id } })
    }
    catch(error) {
        throw error
    }
}

module.exports = { 
    createCategoryService, 
    getAllCategoryService, 
    detailsCategoryService, 
    updateCategoryService, 
    deleteCategoryService
}