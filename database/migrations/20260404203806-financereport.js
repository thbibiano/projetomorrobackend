"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      "financedate",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: true,
        },
        year: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        month: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
      },
      {
        uniqueKeys: {
          finance_date_unique: {
            fields: ["year", "month"],
          },
        },
      },
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("financedate");
  },
};
