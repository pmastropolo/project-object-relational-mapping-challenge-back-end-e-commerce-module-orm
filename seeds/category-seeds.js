const { Category } = require('../models');    // IMPORT CATEGORY MODEL


// ARRAY OF CATEGORY DATA
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);   // FUNCTION CATEGORY BULK CREATE

module.exports = seedCategories;    // EXPORT CATEGORY