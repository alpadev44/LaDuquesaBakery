const Role = require('../../models/index.js').Role;

async function createRoleService(data) {
    try {
        let role = await Role.create(data)
        return role
    }
    catch(error) {
        throw error
    }
}

async function getAllRoleService() {
    try {
        return await Role.findAll()
    }
    catch (err) {
        throw err
    }
}

async function detailsRoleService(id) {
    try {
        return await Role.findByPk(id);
    } catch (err) {
        throw err;
    }
};

async function updateRoleService(id, data) {
    try {
        await Role.update(data, { where: { id: id } });
        return await this.details(id);
    } catch (err) {
        throw err;
    }
};

async function deleteRoleService(id) {
    try {
        return await Role.destroy({ where: { id: id } });
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createRoleService, 
    getAllRoleService, 
    detailsRoleService,
    updateRoleService,
    deleteRoleService
 };