'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
require('dotenv').config()
const db = {};


console.log('DB:', process.env.DB);
console.log('USER_NAME:', process.env.USER_NAME);
console.log('PASSWORD:', process.env.PASSWORD);
console.log('HOST:', process.env.HOST);

const sequelize = new Sequelize(process.env.DB, process.env.USER_NAME, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: 'mysql'
}) 
//const models = '/Users/alpa.dev/Desktop/Duquesa_NodeJS/src/models'

const models = path.join(__dirname, "../src/models")

fs
  .readdirSync(models)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(models, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;