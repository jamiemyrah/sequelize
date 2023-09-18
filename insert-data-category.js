const { category, Sequelize, sequelize } = require("./src/models");

async function createCategory() {
  try {
    const category = await category.bulkCreate([
      {
        name: "foot ware",
        imagePath: "path/to/laptop.jpeg",
      },
      {
        name: "clothings",
        imagePath: "path/to/laptop.jpeg",
      },
      {
        name: "jewerlies",
        imagePath: "path/to/laptop.jpeg",
      },
      {
        name: "sports ware",
        imagePath: "path/to/laptop.jpeg",
      },
    ]);
  } catch (error) {
    console.error(error);
  }
}

createCategory();
