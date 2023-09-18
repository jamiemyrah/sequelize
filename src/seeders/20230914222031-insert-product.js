"use strict";
const { Product } = require("../models/index");
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
    await Product.bulkCreate([
      {
        name: "adiddas47",
        price: 50000,
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
        name: "sportskit",
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
