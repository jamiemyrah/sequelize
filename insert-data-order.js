const { order, Sequelize, sequelize } = require("./src/models");

async function createOrder() {
  try {
    const order = await order.bulkCreate([
      {
        date: new Date(),
        quantity: 100,
      },
      {
        date: new Date(),
        quantity: 120,
      },
      {
        date: new Date(),
        quantity: 150,
      },
      {
        date: new Date(),
        quantity: 30,
      },
    ]);
  } catch (error) {
    console.error(error);
  }
}

createOrder();
