const { Model, DataTypes } = require("sequelize");

class Course extends Model {
  static init(sequelize) {
    super.init(
      {
        id_course: DataTypes.INTEGER,
        id_student: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: "registration",
        indexes: [
          {
            unique: true,
            fields: ["aluno_id", "curso_id"],
          },
        ],
      }
    );
  }

  static associate(models) {}
}

module.exports = Course;
