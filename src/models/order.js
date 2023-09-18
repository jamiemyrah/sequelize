"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {}
  }
  Order.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
          isDate: {
            args: true,
            msg: "Invalid date",
          },
        },
      },
      quantity: {
        type: DataTypes.INTEGER(80),
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "quantity is required",
          },
          len: {
            args: [1, 80],
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "order",
      timestamps: true,
    }
  );
  return Order;
};
