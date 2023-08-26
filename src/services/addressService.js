const Address = require('../../models/index.js').Address;

async function createAddressService(data) {
    try {
        console.log(data)
        let address = await Address.create(data)
        return address
    }
    catch(error) {
        throw error
    }
}

async function getAllAddressService() {
    try {
        return await Address.findAll()
    }
    catch (err) {
        throw err
    }
}

async function detailsAddressService(id) {
    try {
        return await Address.findByPk(id);
    } catch (err) {
        throw err;
    }
};

async function updateAddressService(id, data) {
    try {
        await Address.update(data, { where: { id: id } });
        return await this.details(id);
    } catch (err) {
        throw err;
    }
};

async function deleteAddressService(id) {
    try {
        return await Address.destroy({ where: { id: id } });
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createAddressService, 
    getAllAddressService, 
    detailsAddressService,
    updateAddressService,
    deleteAddressService
 };