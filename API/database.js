require("dotenv").config();
const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  process.env.RDS_DATABASE,
  process.env.RDS_USERNAME,
  process.env.RDS_PASSWORD,
  {
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    logging: console.log,
    maxConcurrentQueries: 100,
    dialect: "mysql",
  }
);
