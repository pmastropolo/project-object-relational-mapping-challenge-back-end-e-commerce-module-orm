const router = require('express').Router();                       // Import express router
const { Category, Product } = require('../../models');           // Import Category and Product models

// The `/api/categories` endpoint

// FIND/GET ALL CATEGORIES with associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      attributes: ['id', 'category_name'], 
      include: [{
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'] 
      }]
    });
    res.json(categoryData);       // Respond with fetched categories
  } catch (err) {                 // Handle errors
    res.status(500).json(err);    // Send a 500 error on failure
  }
});

// GET CATEGORY BY ITS ID
router.get('/:id', async (req, res) => {       // Define route to get all categories
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      attributes: ['id', 'category_name'],     // Select specific attributes
      include: [{   // Include associated products
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        where: {} 
      }]
    });
    if (!categoryData) {     // Check if category exists
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.json(categoryData);   // send fetch catergory data
  } catch (err) {
    res.status(500).json(err);    // Handle errors with 500 status
  }
});



// CREATE A NEW CATEGORY
router.post('/', async (req, res) => {                          // POST request to add category
  try {                                                         
    const categoryData = await Category.create(req.body);       // Create category using request body
    res.status(200).json(categoryData);                         // Respond with 200 and created category data
  } catch (err) {                                               // Handle errors
    res.status(400).json(err);                                   // Respond with bad request status if an error occurs
  }
});

// UPDATE A CATEGORY BY ITS ID VALUE
router.put('/:id', async (req, res) => {                          // PUT request to update category by ID
  try {                                                           
    const categoryData = await Category.update(req.body, {        // Update category using request body
      where: {                                                    // Specify update condition
        id: req.params.id,                                        // Match category ID with request parameter ID
      },
    });

    if (!categoryData) {                           // Check if category was found and updated
      res.status(404).json({ message: 'No category found with this id!' });  // Respond with 404 if not found
      return;                                      // End execution
    }

    res.json(categoryData);                        // Respond with updated category data
  } catch (err) {                                  // Handle errors
    res.status(500).json(err);                     // Respond with server error if something goes wrong
  }
});



// DELETE CATEGORY BY ITS ID VALUE
router.delete('/:id', async (req, res) => {                   // Handle DELETE request for a category by its ID
  try {                                                       // Start error handling block
    const categoryData = await Category.destroy({             // Delete category and store result
      where: {                                                // delete condition
        id: req.params.id,                                    // Match category ID with request parameter ID
      },
    });

    if (!categoryData) {                                                            // Check if category was found
      res.status(404).json({ message: 'No category found with this id!' });         // Respond with 404 if not found
      return;                                                                       // End execution
    }

    res.json(categoryData);                                   // Respond with deleted category data
  } catch (err) {                                             // Handle errors
    res.status(500).json(err);                                // Respond with server error if something goes wrong
  }
});

module.exports = router;                                      // Export the router to be used elsewhere
