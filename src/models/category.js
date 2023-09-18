"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // define association here
    }
  }
  Category.init(
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
          msg: "Duplicate category name",
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
      imagePath: {
        type: DataTypes.BLOB(500),
        allowNull: false,
        unique: {
          args: true,
          msg: "Duplicate category image",
        },
        notEmpty: {
          args: true,
          msg: "Image path is required",
        },
        len: {
          args: [5, 500],
        },
      },
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "category",
      timestamps: true,
    }
  );
  return Category;
};
