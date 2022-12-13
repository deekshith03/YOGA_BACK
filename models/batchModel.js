const { Model, DataTypes } = require("sequelize");
const sequelize = require("./index");

class Batch extends Model {}

Batch.init(
  {
    batchId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    batchName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    from: {
      type: DataTypes.TIME,
      allowNull: false,
      set(valueToBeSet) {
        this.setDataValue("from", valueToBeSet);
      },
    },
    to: {
      type: DataTypes.TIME,
      allowNull: false,
      set(valueToBeSet) {
        this.setDataValue("to", valueToBeSet);
      },
    },
  },
  {
    sequelize, // We need to pass the connection instance
    modelName: "Batch", // We need to choose the model name
    timestamps: false,
  }
);

module.exports = Batch;
