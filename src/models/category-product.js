"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CategoryProduct extends Model {
    static associate(models) {
      // define association here
      CategoryProduct.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
      });
      CategoryProduct.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "product",
      });
    }
  }
  CategoryProduct.init(
    {
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          key: "id",
          model: "category",
        },
      },

      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          key: "id",
          model: "product",
        },
      },
    },
    {
      sequelize,
      modelName: "categoryProduct",
      tableName: "category_product",
      timestamps: true,
    }
  );
  return CategoryProduct;
};
