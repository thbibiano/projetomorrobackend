"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("financereport", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
      },
      id_financedate: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "financedate",
          key: "id",
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
      },
      name: {
        type: Sequelize.text,
        allowNull: false,
      },
      value: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      isDonation: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("financereport");
  },
};
