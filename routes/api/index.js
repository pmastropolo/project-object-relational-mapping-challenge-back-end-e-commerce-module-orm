const router = require('express').Router();           // Import express router  
const categoryRoutes = require('./category-routes');    // Import Route CATEGORY
const productRoutes = require('./product-routes');      // Import Route PRODUCT
const tagRoutes = require('./tag-routes');              // Import Route TAG 

// Define route paths
router.use('/categories', categoryRoutes);              // CATEGORY
router.use('/products', productRoutes);                 // PRODUCT
router.use('/tags', tagRoutes);                         // TAG

// Export router
module.exports = router;