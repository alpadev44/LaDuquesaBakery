const Address = require('../../config/db.js').Address
const City = require('../../config/db.js').City


async function createCityService({
    name,
    country,
    address
}) {
    try {
        let city = await City.create({ name, country})
        await city.setAddress(address)
        return city
    }
    catch(error) {
        throw error
    }
}

async function getAllCityService() {
    try {
        return await City.findAll()
    }
    catch(error) {
        throw error
    }
}

async function detailsCityService(id) {
    try {
        return await City.findByPk(id, {
            include: [{
                model: Address
            }]
        })
    }
    catch(error) {
        throw error
    }
}

async function updateCityService(id,data) {
    try { 
        await City.update( data, { where: { id: id } })
        return await this.details(id)
    } 
    catch(error) {
        throw error
    }
}

async function deleteCityService(id) {
    try {
        return await City.destroy( data, { where: { id: id } })
    }
    catch(error) {
        throw error
    }
}

module.exports = { 
    createCityService, 
    getAllCityService, 
    detailsCityService, 
    updateCityService, 
    deleteCityService
}