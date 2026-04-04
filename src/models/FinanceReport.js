const { Model, DataTypes } = require("sequelize");

class FinanceReport extends Model {
  static init(sequelize) {
    super.init(
      {
        id_financedate: DataTypes.INTEGER,
        name: DataTypes.STRING,
        value: DataTypes.INTEGER,
        is_donation: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        tableName: "financereport",
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.FinanceDate, {
      foreignKey: "id_financedate",
      as: "financedate",
    });
  }
}

module.exports = FinanceReport;
