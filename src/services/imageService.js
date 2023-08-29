const Image = require('../../config/db.js').Image;

async function createImageService(data) {
    try {
        let image = await Image.create(data)
        return image
    }
    catch(error) {
        throw error
    }
}

async function getAllImageService() {
    try {
        return await Image.findAll()
    }
    catch (err) {
        throw err
    }
}

async function detailsImageService(id) {
    try {
        return await Image.findByPk(id);
    } catch (err) {
        throw err;
    }
};

async function updateImageService(id, data) {
    try {
        await Image.update(data, { where: { id: id } });
        return await this.details(id);
    } catch (err) {
        throw err;
    }
};

async function deleteImageService(id) {
    try {
        return await Image.destroy({ where: { id: id } });
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createImageService, 
    getAllImageService, 
    detailsImageService,
    updateImageService,
    deleteImageService
 };