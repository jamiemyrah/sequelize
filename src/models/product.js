"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here
    }
  }
  Product.init(
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
        unique: {
          args: true,
          msg: "Duplicate product name",
        },
        validate: {
          notEmpty: {
            args: true,
            msg: "name is required",
          },
          len: {
            args: [1, 80],
          },
        },
      },
      price: {
        type: DataTypes.INTEGER(1000000),
        allowNull: false,
        validate: {
          notNull: {
            args: true,
          },
          min: {
            args: [1],
            msg: "price accepts a minimum of 1",
          },
          max: {
            args: [1000000],
            msg: "price accepts a maximum of 1000000",
          },
        },
      },
      color: {
        type: DataTypes.STRING(200),
        allowNull: true,
        validate: {
          notEmpty: {
            args: true,
          },
          len: {
            args: [1, 80],
          },
        },
      },
      quantity: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "product",
      timestamps: true,
    }
  );
  return Product;
};
