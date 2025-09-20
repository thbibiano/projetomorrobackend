"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "registration",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: true,
        },
        id_course: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "course",
            key: "id",
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        },
        id_student: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "student",
            key: "id",
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
      },
      {
        uniqueKeys: {
          aluno_curso_unique: {
            fields: ["id_course", "id_student"],
          },
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("registration");
  },
};
