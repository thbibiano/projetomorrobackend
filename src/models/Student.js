const { Model, DataTypes } = require("sequelize");

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        cpf: DataTypes.STRING,
        phone: DataTypes.STRING,
        celphone: DataTypes.STRING,
        cep: DataTypes.STRING,
        family_income: DataTypes.INTEGER,
        cep: DataTypes.STRING,
        city: DataTypes.STRING,
        house_number: DataTypes.INTEGER,
        neighborhood: DataTypes.STRING,
        state: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "student",
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Course, {
      foreignKey: "id_student",
      otherKey: "id_course",
      through: "registration",
      as: "courses",
    });
  }
}

module.exports = Student;
