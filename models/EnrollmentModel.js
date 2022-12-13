const { Model, DataTypes, Deferrable } = require("sequelize");
const Batch = require("./batchModel");
const User = require("./userModel");

const sequelize = require("./index");

class Enrollment extends Model {}

Enrollment.init(
  {
    enrollmentId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    batchId: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: Batch,
      //   key: "batchId",
      //   // deferrable: Deferrable.INITIALLY_DEFERRED,
      // },
    },
    email: {
      type: DataTypes.TEXT,
      // references: {
      //   model: User,
      //   key: "email",
      //   // deferrable: Deferrable.INITIALLY_DEFERRED,
      // },
    },
    enrolledMonth: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        customValidator(value) {
          let regex = new RegExp("^(0[1-9]|1[0-2])/(20[0-9][0-9])$");
          if (!regex.test(value)) {
            throw new Error(
              "enrolled month format can be only in mm/yyyy format"
            );
          }
        },
      },
    },
    paymentStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Enrollment",
    timestamps: false,
  }
);

module.exports = Enrollment;
