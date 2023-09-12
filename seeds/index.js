const seedCategories = require('./category-seeds');       // CATEGORIES
const seedProducts = require('./product-seeds');          // PRODUCTS
const seedTags = require('./tag-seeds');                  // TAGS
const seedProductTags = require('./product-tag-seeds');   // PRODUCT TAGS

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');       // CATEGORIES

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');         // PRODUCTS

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');             // TAGS

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');     // PRODUCT TAGS

  process.exit(0);
};

seedAll();