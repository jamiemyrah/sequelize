"use strict";
const { Order } = require("../models/index");
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
    await Order.bulkCreate([
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
