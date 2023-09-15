// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(

  {
    // Define id column with various properties
    id: {
      type: DataTypes.INTEGER,                  // Set data type to INTEGER
      allowNull: false,                         // Cannot be null
      primaryKey: true,                         // Primary key
      autoIncrement: true,                      // Auto-increment value
    },

    product_name: {
      type: DataTypes.STRING,                   // Set data type to STRING
      allowNull: false,                         // Cannot be null
      defaultValue: "Default Product Name"
    },

    price: {
      type: DataTypes.DECIMAL(10, 2),           // Set data type to DECIMAL with 10 digits, 2 after decimal
      allowNull: false,                         // Cannot be null
      validate: {
        isDecimal: true,                        // Make sure value is a decimal
      },
    },

    stock: {
      type: DataTypes.INTEGER,            // Set data type to INTEGER
      allowNull: false,                    // Cannot be null 
      defaultValue: 10,                       // Default value set to 10
      validate: {
        isNumeric: true,                   // Ensure value is numeric
      },
    },

    category_id: {
      type: DataTypes.INTEGER,          // Set data type to INTEGER
      references: {
        model: 'category',               // Establish a foreign key relationship with the 'category' table
        key: 'id',                        // The key in the 'category' table that this refers to
      },
    },
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',               // Name of the model as used in Sequelize
  }
);

module.exports = Product;           // Export the Product model