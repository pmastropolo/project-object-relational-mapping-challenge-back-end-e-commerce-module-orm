const Sequelize = require('sequelize');      // Import Sequelize library
require('dotenv').config();                  // dotenv

const sequelize = new Sequelize(             // Initialize Sequelize
  process.env.DB_NAME,                       // Database name
  process.env.DB_USER,                       // Database user
  process.env.DB_PASSWORD,                   // Database password
  {
    host: 'localhost',                       // Database host
    dialect: 'mysql',                        // Using MySQL dialect
    port: 3306,                              // Port number
  }
);

module.exports = sequelize;                  // Export Sequelize instance
