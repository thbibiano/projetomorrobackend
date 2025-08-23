const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Adminer = require("./Adminer");
const Course = require("./Course");
const Registration = require("./Registration");
const Student = require("./Student");

const connection = new Sequelize(dbConfig);

Adminer.init(connection);
Course.init(connection);
Registration.init(connection);
Student.init(connection);

Adminer.associate(connection.models);
Course.associate(connection.models);
Student.associate(connection.models);

module.exports = connection;
