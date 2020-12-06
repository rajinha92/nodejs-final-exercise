const { Sequelize } = require("sequelize");

// connect to "exercises" database, using user "root" and "password" password
const sequelize = new Sequelize("exercises", "root", "password", {
  host: "localhost", //default mysql port = 3306
  dialect: "mysql",
});

module.exports = sequelize;
