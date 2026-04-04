const { Model, DataTypes } = require("sequelize");

class FinanceDate extends Model {
  static init(sequelize) {
    super.init(
      {
        year: DataTypes.INTEGER,
        month: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: "financedate",
      },
    );
  }

  static associate(models) {
    this.hasMany(models.FinanceReport, {
      foreignKey: "id_financedate",
      as: "financereport",
    });
  }
}

module.exports = FinanceDate;
