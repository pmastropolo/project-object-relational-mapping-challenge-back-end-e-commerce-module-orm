// IMPORT
const Product = require('./Product');             // PRODUCT
const Category = require('./Category');           // CATEGORY
const Tag = require('./Tag');                     // TAG
const ProductTag = require('./ProductTag');       // PRODUCT TAG



// Product belongsTo Category
Product.belongsTo(Category, {                     // Establish relationship bt/n Product/Category models
  foreignKey: 'category_id',                                 // key used to link product to category
  onDelete: 'CASCADE'                            // If a Category is deleted, Product will also be deleted
});


// Categories have many Product
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { 
through: ProductTag,
foreignKey: 'product_id',
onDelete: 'CASCADE'
});


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { 
  through: ProductTag,
  foreignKey: 'tag_id',
  onDelete: 'CASCADE'
  });


// package models and export them as an object 
// so we can import them together and use their proper names
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};