const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});


module.exports = sequelize;
