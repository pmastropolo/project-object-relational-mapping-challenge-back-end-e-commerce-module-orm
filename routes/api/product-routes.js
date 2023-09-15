// IMPORT
const router = require('express').Router();              // Import express router
const { Product, Category, Tag, ProductTag } = require('../../models'); // Destructure models

// The `/api/products` endpoint

// GET ALL PRODUCTS
router.get('/', async (req, res) => {           // Route for getting all products                                
  try {
    const productData = await Product.findAll({
      attributes: ['product_name', 'price', 'stock', 'category_id'],
      include: [
        {
          model: Category,
          attributes: ['category_name']     // Link category
        },
        {
          model: Tag,
          attributes: ['tag_name']        // Link tag
        }
      ]
    });

    res.status(200).json(productData);   
  } catch (err) {
    res.status(500).json(err);            // Handle errors
  }
});



// GET A PRODUCT BY ID
router.get('/:id', async (req, res) => {              // Route for getting a single product by ID
  try {                                               // try block

    const product = await Product.findOne({          // single product based on ID
      where: { id: req.params.id },                  // Specify which product to fetch using ID from URL
      include: [{                                    // Include associated data
        model: Tag,                                  // Include data from the Tag model
        as: 'tags',                                  // Alias for joined data
        through: ProductTag,                         // Specify join table
        attributes: ['id', 'tag_name']               // Specify which attributes to fetch
      }]
    });

    if (!product) {                                  // If product isn't found
      res.status(404).json({ message: 'No product found with that id!' });  // Send 404 error message
      return;                                        // Exit function
    }

    res.status(200).json(product);                   // Send fetched product as response
  } catch (err) {                                    // Handle any errors that might occur
    console.error(err);                              // Log error
    res.status(500).json(err);                       // Send error
  }
});  


// CREATE NEW PRODUCT
router.post('/', async (req, res) => {                                        // Route for product creation
  
  const { product_name, price, stock, category_id, tagIds } = req.body;       // Destructure request body

  /* req.body should look like this... 
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */

  if (!product_name || isNaN(price) || stock === undefined || !Array.isArray(tagIds) || !category_id) {
    return res.status(400).json({ message: 'product_name, price, stock, tagIds, and category_id are required fields!' }); // Validate request data
  }

  try {
    const tags = await Tag.findAll({                                          // Fetch tags based on provided IDs
      attributes: ['id'],
      where: { id: tagIds }
    });

    if (tags.length !== tagIds.length) {                                      // Are all tags are valid?
      return res.status(400).json({ message: 'One or more tagIds are invalid!' });
    }

    const product = await Product.create({                                    // Create product
      product_name,
      price,
      stock,
      category_id
    });

    const productTags = tagIds.map(tagId => ({                                // Map product with tags
      product_id: product.id,
      tag_id: tagId
    }));

    await ProductTag.bulkCreate(productTags);                                 // Create product-tag associations

    res.status(200).json(product);                                            // Send created product in response
  } catch (error) {
    console.error(error);                                                     // Log & send errors
    res.status(400).json(error);


// PUT TO UPDATE A PRODUCT BY ID
router.put('/:id', async (req, res) => {
// Destructure tags and other data
const { tagIds, ...updateData } = req.body;

try {
  // Update product
  const [updatedRows] = await Product.update(updateData, {
    where: { id: req.params.id }
  });

  // If product was updated and there are tags
  if (updatedRows !== 0 && tagIds) {
      
  // Fetch updated product details
  const product = await Product.findOne({
  attributes: ['id', 'product_name', 'price'],
  where: { id: req.params.id },
    include: {
    model: Tag,      // Include tags
    as: 'tags',
    attributes: ['id']
  }
});
// Set new tags for product
  await product.setTags(tagIds);
}
    res.status(200).json({ message: "Product updated" });                        // Return updated product
  } catch (err) {                                                               // In case of errors
    console.error(err);
    res.status(400).json(err);                                                // Respond error
  }
});
}
});

// DELETE TO REMOVE A PRODUCT BY ID
router.delete('/:id', async (req, res) => {                                   // DELETE route for product by ID
  try {
    const productData = await Product.destroy({                               // Attempt to destroy product
      where: {
        id: req.params.id                                                     // which product to delete
      }
    });

    if (!productData) {                                                        // If no product is found
      res.status(404).json({ message: 'No product found with that id!' });    // Send 404 status and message
      return;                                                                 // Exit function
    }

    res.status(200).json(productData);                                        // Send 200 status and information about deleted product
  } catch (err) {                                                             // Handle errors
    res.status(500).json(err);                                                // Send 500 status and error info
  }
});

module.exports = router;         // Export router 