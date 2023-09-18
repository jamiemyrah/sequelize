const { product, Sequelize, sequelize } = require("./src/models");

async function insertDataProduct() {
  try {
    const product = await product.bulkCreate([
      {
        name: "adiddas47",
        price: 500,
        color: "green",
        quantity: 100,
      },
      {
        name: "lildress",
        price: 5000,
        color: "blue",
        quantity: 10,
      },
      {
        name: "earings",
        price: 2000,
        color: "black",
        quantity: 30,
      },
      {
        name: "sports kit",
        price: 400,
        color: "yellow",
        quantity: 16,
      },
      {
        name: "veil",
        price: 700,
        color: "red",
        quantity: 20,
      },
    ]);
  } catch (error) {
    console.error(error);
  }
}

insertDataProduct();
