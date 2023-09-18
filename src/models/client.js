"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      // define association here
    }
  }
  Client.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(80),
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "FirstName is required",
          },
          len: {
            args: [1, 80],
          },
        },
      },

      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: {
          args: true,
          msg: "Emails should be unique",
        },
        validate: {
          isEmail: {
            args: true,
            msg: "Invalid email",
          },
          notEmpty: {
            args: true,
            msg: "Empty strings are not valid emails",
          },
        },
      },
      telephone: {
        type: DataTypes.STRING(25),
        allowNull: false,
        unique: {
          args: true,
          msg: "Telephone should be unique",
        },
        validate: {
          notNull: {
            args: true,
            msg: "telephone is required",
          },
          notEmpty: {
            args: true,
            msg: "Empty strings are not valid telephone numbers",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Client",
      tableName: "client",
      timestamps: true,
    }
  );
  return Client;
};
