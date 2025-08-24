const { Model, DataTypes } = require("sequelize");

class Registration extends Model {
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
            fields: ["id_student", "id_course"],
          },
        ],
      }
    );
  }

  static associate(models) {}
}

module.exports = Registration;
