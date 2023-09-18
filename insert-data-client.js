const { product, Sequelize, sequelize } = require("./src/models");

async function insertDataClient() {
  try {
    const client = await client.bulkCreate([
      {
        name: "Daniel",
        email: "daniel@gmail.com",
        telephone: "0785074916",
      },
      {
        name: "Liam",
        email: "liam@gmail.com",
        telephone: "0784074816",
      },
      {
        name: "Lydia",
        email: "lydia@gmail.com",
        telephone: "0785574919",
      },
      {
        name: "Dyne",
        email: "dyne@gmail.com",
        telephone: "0755074556",
      },
      {
        name: "Kimbowa",
        email: "kimbowa@gmail.com",
        telephone: "0785075900",
      },
    ]);
  } catch (error) {
    console.error(error);
  }
}

insertDataClient();
