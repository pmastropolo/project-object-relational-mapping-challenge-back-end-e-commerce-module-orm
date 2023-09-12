const Sequelize = require('sequelize');                       // Import Sequelize
require('dotenv').config();                                   // dotenv

let sequelize;

if (process.env.JAWSDB_URL) {                                 // Check if enviroment variable JAWSDB_URL is set
  sequelize = new Sequelize(process.env.JAWSDB_URL);          // if set,  initialize sequelize with that URL
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      logging: console.log
    }
  );
}

module.exports = sequelize;