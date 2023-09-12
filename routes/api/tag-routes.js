const router = require('express').Router();                 // Get Express router
const { Tag, Product, ProductTag } = require('../../models');  

// GET ALL TAGS
router.get('/', (req, res) => {                             // GET route for all tags
  Tag.findAll({                                             // Find all tags
    include: [Product]                                      // Include associated products
  }).then((tagData) => {                                    // Handle the promise 
    res.json(tagData);                                      // Send retrieved data as JSON
  });
});

// GET A SPECIFIC TAG BY ITS ID 
router.get('/:id', async (req, res) => {                    // GET single tag by ID
  try {                                                    
    const tagData = await Tag.findByPk(req.params.id, {     // Fetch tag by primary key (ID)
      include: [Product]                                   
    });
    if (!tagData) {                                         // If tag not found
      res.status(404).json({ message: 'No Tag Found with this id!' }); // Send 404 status and message
      return;                                               // Exit function
    }
    res.status(200).json(tagData);                          // Send 200 status and retrieved tag data
  } catch (err) {                                           // Handle errors
    res.status(500).json(err);                              // Send 500 status and error info
  }
});


// CREATE A NEW TAG
router.post('/', async (req, res) => {             // Route to add a tag
  try {                                           // Begin try block for async operations
    const tagData = await Tag.create(req.body);   // Create new tag using request body
    res.status(200).json(tagData);                // Respond with 200 and new tag data
  } catch (err) {                                 // Handle errors
    res.status(400).json(err);                    // Send a 400 error on failure
  }
});



// UPDATE AN EXISTING TAG
router.put('/:id', async (req, res) => {           // Route to update tag by ID
  try {                                            
    const tagData = await Tag.update(req.body, {   // Update tag based on request body
      where: {                                     // Where condition
        id: req.params.id,                         // Tag ID from route parameter
      },
      individualHooks: true                        // Use hooks for individual rows
    });
    if (!tagData[0]) {                                        // Check if any tag was updated
      res.status(404).json({ message: 'No Tag Found with this id!' });  // 404 if none found
      return;                                      // Exit function
    }
    res.status(200).json(tagData);                 // Respond with 200 and updated tag data
  } catch (err) {                                  // Handle errors
    res.status(500).json(err);                     // Send a 500 error on failure
  }
});


// DELETE A TAG
router.delete('/:id', (req, res) => {              // Route to delete tag by ID
  Tag.destroy({                                    // Delete tag
    where: {                                       // Specify where condition
      id: req.params.id,                           // Tag ID from route parameter
    },
  })
  .then((deletedTag) => {                          // Handle successful deletion
    res.json(deletedTag);                          // Respond with deleted tag data
  })
  .catch((err) => res.json(err));                  // Handle errors and respond
});


module.exports = router;                           // Export
