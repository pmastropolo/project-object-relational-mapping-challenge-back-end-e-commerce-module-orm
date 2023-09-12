// IMPORT
const router = require('express').Router();              // Import express router
const { Product, Category, Tag, ProductTag } = require('../../models'); // Destructure models

// The `/api/products` endpoint

// GET ALL PRODUCTS
router.get('/', async (req, res) => {                   // Route for getting all products

  try {
    const productData = await Product.findAll({          // Fetch all products

      include: [
        { model: Category }, 
        { model: Tag, through: ProductTag }]              // Include Category & Tags via ProductTag

    });

    res.status(200).json(productData);                  // Return found products

  } catch (err) {

    res.status(500).json(err);                          // Handle errors

  }
});

// GET ONE PRODUCT
router.get('/:id', async (req, res) => {                // Route for getting a single product by ID

  try {

    const productData = await Product.findByPk(req.params.id, { // Fetch product by primary key (ID)

      include: 
      [{ model: Category }, 
      { model: Tag, through: ProductTag }]                // Include Category & Tags via ProductTag

    });

    if (!productData) {                                                                         // If product not found
      res.status(404).json({ message: 'No product found with that id!' });                    // Return 404 status
      return;                                                                                 // Exit
    }

    res.status(200).json(productData);                                                    // Return found product

  } catch (err) {

    res.status(500).json(err);                                                          // Handle errors
  }

});


// CREATE NEW PRODUCT
router.post('/', (req, res) => {                        // Route for creating a new product
  /* req.body should look like this... 
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)                              

    .then((product) => {
     
      if (req.body.tagIds.length) {                      // If tags are provided

        const productTagIdArr = req.body.tagIds.map((tag_id) => { // Map to create new product-tag associations

          return {

            product_id: product.id,
            tag_id,

          };
        });

        return ProductTag.bulkCreate(productTagIdArr);   // Bulk create product-tag associations

      }

      // if no product tags, just respond
      res.status(200).json(product);                    // Return created product
    })
    .then((productTagIds) => res.status(200).json(productTagIds)) // Return created product-tag associations
    .catch((err) => {                                   
      console.log(err);                                 // Log errors
      res.status(400).json(err);                        // Return errors
    });
});


// UPDATE PRODUCT
router.put('/:id', (req, res) => {                        
  // update product data
  Product.update(req.body, {                             
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {                                   // After updating product
      if (req.body.tagIds && req.body.tagIds.length) {     // If tagIds exist and are not empty

        ProductTag.findAll({                               // Get all ProductTags for product
          where: { product_id: req.params.id }
        }).then((productTags) => {
          // create filtered list of new tag_ids
          const productTagIds = productTags.map(({ tag_id }) => tag_id);    // Map current tag IDs
          const newProductTags = req.body.tagIds            // Find new tags not in productTagIds
            .filter((tag_id) => !productTagIds.includes(tag_id))
            .map((tag_id) => {
              return {
                product_id: req.params.id,
                tag_id,
              };
            });

          // figure out which ones to remove
          const productTagsToRemove = productTags            // Find tags to be removed
            .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
            .map(({ id }) => id);
          // run both actions
          return Promise.all([                               // Execute both remove & add actions 
            ProductTag.destroy({ where: { id: productTagsToRemove } }),    // Remove tags
            ProductTag.bulkCreate(newProductTags),           // Add new tags
          ]);
        });
      }

      return res.json(product);                              // Return updated product
    })

    .catch((err) => {                                        // In case of errors
      
      res.status(400).json(err);                             // Respond error

    });
});


// DELETE PRODUCT
router.delete('/:id', async (req, res) => {          // DELETE route for product by ID
  
  try {                                              
    const productData = await Product.destroy({      // Attempt to destroy product

      where: {                                       // which product to delete
        id: req.params.id                        
      }
    });

    if (!productData) {                              // If no product is found
      res.status(404).json({ message: 'No product found with that id!' }); // Send 404 status and message
      return;                                        // Exit function
    }

    res.status(200).json(productData);               // Send 200 status and information about deleted product
  } catch (err) {                                    // Handle errors
    res.status(500).json(err);                       // Send 500 status and error info
  }
});

module.exports = router;                             // Export router 
