const { Model, DataTypes } = require('sequelize');    // Import Sequelize
const sequelize = require('../config/connection');  // Import Connection 

class ProductTag extends Model {}   // Define ProductTag Class

ProductTag.init(                                    // Initialize ProductTag schema
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,          // use underscores
    modelName: 'product_tag',   // define name 
  }
);

module.exports = ProductTag;    // Export