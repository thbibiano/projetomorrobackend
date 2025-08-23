const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

class Users extends Model {
  static init(sequelize) {
    super.init(
      {
        nickname: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
      },
      {
        hooks: {
          beforeSave: async (user) => {
            const hash = await bcrypt.hash(user.password_hash, 10);
            user.password_hash = hash;
          },
        },
        sequelize,
        tableName: "adminer",
      }
    );
  }
  static associate(models) {}
}

module.exports = Users;
