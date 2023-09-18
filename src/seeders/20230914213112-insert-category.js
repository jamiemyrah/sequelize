"use strict";
const { Category } = require("../models/index");
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
    await Category.bulkCreate([
      {
        name: "foot ware",
        imagePath: "path/to/laptop.jpeg",
      },
      {
        name: "clothings",
        imagePath: "path/to/computer.jpeg",
      },
      {
        name: "jewerlies",
        imagePath: "path/to/gal.jpeg",
      },
      {
        name: "sports ware",
        imagePath: "path/to/bar.jpeg",
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
