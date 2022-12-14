
const { Sequelize, DataTypes } = require("sequelize");


const sequelize = new Sequelize(process.env.HOST)
module.exports = sequelize;
