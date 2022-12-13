const { Model, DataTypes } = require("sequelize");
const sequelize = require("./index");
class User extends Model {}

User.init(
  {
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize, // We need to pass the connection instance
    modelName: "User", // We need to choose the model name
    timestamps: false,
  }
);

module.exports = User;
