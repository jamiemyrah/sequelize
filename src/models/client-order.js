"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ClientOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ClientOrder.belongsTo(models.Client, {
        foreignKey: "clientId",
        as: "client",
      });
      ClientOrder.belongsTo(models.Order, {
        foreignKey: "orderId",
        as: "order",
      });
    }
  }
  ClientOrder.init(
    {
      clientId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          key: "id",
          model: "client",
        },
      },

      orderId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          key: "id",
          model: "order",
        },
      },
    },
    {
      sequelize,
      modelName: "clientOrder",
      tableName: "client_order",
      timestamps: true,
    }
  );
  return ClientOrder;
};
