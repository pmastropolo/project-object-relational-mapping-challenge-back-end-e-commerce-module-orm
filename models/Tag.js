const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // Define the id attribute/column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
  },
// Define the tag_name attribute/column
  tag_name: {
    type: DataTypes.STRING      // Set the data type as string
  }

  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',             // Define the name of this model within Sequelize
  }
);

module.exports = Tag;