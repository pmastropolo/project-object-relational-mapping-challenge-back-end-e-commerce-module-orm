const { Model, DataTypes } = require('sequelize');    // Import Sequelize
const sequelize = require('../config/connection');  // Import Connection 

class ProductTag extends Model {}   // Define ProductTag Class

ProductTag.init(                                    // Initialize ProductTag schema
  {
    id: {                                           // 'id' field
      type: DataTypes.INTEGER,                      // Data type: Integer
      allowNull: false,                             // Can't be empty
      primaryKey: true,                             // Primary key
      autoIncrement: true                           // Increment automatically
    },

    product_id: {                                   // Column for Product linkage
      type: DataTypes.INTEGER,                      // Data type: Integer
      references: {                                 // Define foreign key relationship
        model: 'product',                           // Connects to 'product' model
        key: 'id'                                  // Using 'id' field
      
      },
    },

    tag_id: {                                       // Column for Tag linkage
      type: DataTypes.INTEGER,                      // Data type: Integer
      references: {                                 // Define foreign key relationship
        model: 'tag',                               // Connects to 'tag' model
        key: 'id'                                  // Using 'id' field
  
      },
    },
  },
  {
    sequelize,                        // Use existing Sequelize setup
    timestamps: false,
    freezeTableName: true,          // Retain given table name
    underscored: true,              // Name convention: underscores
    modelName: 'product_tag',     // Label for Sequelize methods
  }
);

module.exports = ProductTag;    // Make ProductTag available elsewhere