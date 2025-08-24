const { Model, DataTypes } = require("sequelize");

class Course extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        total_hours: DataTypes.INTEGER,
        teacher: DataTypes.STRING,
        init_date: DataTypes.DATEONLY,
        end_date: DataTypes.DATEONLY,
        init_hour: DataTypes.INTEGER,
        end_hour: DataTypes.INTEGER,
        is_active: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        tableName: "course",
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Student, {
      foreignKey: "id_course",
      otherKey: "id_student",
      through: "registration",
      as: "students",
    });
  }
}

module.exports = Course;
