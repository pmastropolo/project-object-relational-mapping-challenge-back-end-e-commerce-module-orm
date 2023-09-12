const { Model, DataTypes } = require('sequelize');              
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(

  {
    // Define the id attribute
    id: {
      type: DataTypes.INTEGER,                    // Data type is integer
      allowNull: false,                           // ID cannot be null
      primaryKey: true,                            // ID is the primary key 
      autoIncrement: true,                         // ID will auto-increment for each new record 
  },
  // Define the category_name attribute
  category_name: {
    type: DataTypes.STRING,                       // Data type is string
    allowNull: false,                             // category_name cannot be null
  },

  },

  {
    sequelize,                                      
    timestamps: false,                             // Disable timestamps (createdAt, updatedAt)   
    freezeTableName: true,                        // Prevent Sequelize from renaming the table
    underscored: true,                           // Convert camelCased columns to underscored
    modelName: 'category',                      // Name for the model in Sequelize
  }
  
);

module.exports = Category;    // export Catergory model for use in other files