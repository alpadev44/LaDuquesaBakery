const User = require("../../config/db.js").User;
const Role = require("../../config/db.js").Role;
const bycryptjs = require("bcryptjs");

async function createUserService({
  name,
  lastName,
  email,
  password,
  phone,
  role,
}) {
  try {
    const salt = bycryptjs.genSaltSync();
    password = bycryptjs.hashSync(password, salt);
    let user = await User.create({ name, lastName, email, password, phone });
    await user.setRole(role);
    return user;
  } catch (error) {
    throw error;
  }
}

async function getAllUserService() {
  try {
    return await User.findAll();
  } catch (error) {
    throw error;
  }
}

async function detailsUserService(id) {
  try {
    return await User.findByPk(id, {
      include: [
        {
          model: Role,
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

async function updateUserService(id, data) {
  try {
    await User.update(data, { where: { id: id } });
    return await this.details(id);
  } catch (error) {
    throw error;
  }
}

async function deleteUserService(id) {
  try {
    return await User.destroy({ where: { id: id } });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUserService,
  getAllUserService,
  detailsUserService,
  updateUserService,
  deleteUserService,
};
