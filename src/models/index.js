const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Adminer = require("./Adminer");
const Course = require("./Course");
const Registration = require("./Registration");
const Student = require("./Student");
const FinanceDate = require("./FinanceDate");
const FinanceReport = require("./FinanceReport");

const connection = new Sequelize(dbConfig);

Adminer.init(connection);
Course.init(connection);
Registration.init(connection);
Student.init(connection);
FinanceDate.init(connection);
FinanceReport.init(connection);

Adminer.associate(connection.models);
Course.associate(connection.models);
Student.associate(connection.models);
FinanceDate.associate(connection.models);
FinanceReport.associate(connection.models);

module.exports = connection;
