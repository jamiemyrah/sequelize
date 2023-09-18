"use strict";
const { Client } = require("../models/index");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await Client.bulkCreate([
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
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
