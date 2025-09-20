const { Model, DataTypes } = require("sequelize");

class Registration extends Model {
  static init(sequelize) {
    super.init(
      {
        id_course: {
          type: DataTypes.INTEGER,
          references: {
            model: "course", // ou o nome exato da tabela Course
            key: "id",
          },
          onDelete: "CASCADE",
        },
        id_student: {
          type: DataTypes.INTEGER,
          references: {
            model: "student",
            key: "id",
          },
          onDelete: "CASCADE",
        },
      },
      {
        sequelize,
        tableName: "registration",
        indexes: [
          {
            unique: true,
            fields: ["id_student", "id_course"],
          },
        ],
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Course, { foreignKey: "id_course", as: "course" });
    this.belongsTo(models.Student, { foreignKey: "id_student", as: "student" });
  }
}

module.exports = Registration;
