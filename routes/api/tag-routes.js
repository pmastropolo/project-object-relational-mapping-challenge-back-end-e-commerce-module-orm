const router = require('express').Router();                
const { Tag, Product, ProductTag } = require('../../models');  

// GET/SHOW ALL TAGS
router.get('/', async (req, res) => {              // Endpoint to fetch all tags
  try {
    const tags = await Tag.findAll({
      attributes: ['id', 'tag_name'],              // Only get id and tag name
      include: {
        model: Product,                            // Include associated products
        attributes: ['product_name'],              // Only get product names
        through: {
          model: ProductTag,                       // Through join table
          attributes: ['product_id', 'tag_id']     // Get product and tag ids
        }
      }
    });
    res.json(tags);                                // Respond with tags
  } catch (err) {
    res.status(500).json({ message: "Couldn't retrieve tags." });  // Handle potential errors
  }
});


// GET TAG BY ID
router.get('/:id', async (req, res) => {           // Endpoint to fetch tag by ID
  try {
    const tag = await Tag.findOne({
      where: { id: req.params.id },                // Based on ID from URL
      attributes: ['id', 'tag_name'],
      include: {
        model: Product,
        attributes: ['product_name'],
        through: {
          model: ProductTag,
          attributes: ['product_id', 'tag_id']
        }
      }
    });
    if (!tag) {
      return res.status(404).json({ message: 'No Tag Found with this id!' });  // If tag isn't found
    }
    res.json(tag);                                 // Respond with found tag
  } catch (err) {
    res.status(500).json({ message: "Tag fetch failed." });  // Handle potential errors
  }
});


// CREATE NEW TAG
router.post('/', async (req, res) => {             // Endpoint to create a new tag
  try {
    const newTag = await Tag.create({tag_name: req.body.tag_name});
    res.json(newTag);                              // Respond with created tag
  } catch (err) {
    res.status(400).json({ message: 'Tag creation issue.' });  // Handle potential errors
  }
});


// UPDATE TAG BY ID
router.put('/:id', async (req, res) => {           // Endpoint to update a tag by ID
  try {
    const updatedTag = await Tag.update(
      { tag_name: req.body.tag_name },
      { where: { id: req.params.id } }
    );
    if (!updatedTag[0]) {
      return res.status(404).json({ message: 'No Tag Found with this id!' });  // If no tag was updated
    }
    res.json({ message: 'Your tag just had a glow up!' });  // Respond with success
  } catch (err) {
    res.status(500).json({ message: 'Tag update problem.' });  // Handle potential errors
  }
});


// DELETE TAG
router.delete('/:id', async (req, res) => {        // Endpoint to delete a tag by ID
  try {
    const rowsDeleted = await Tag.destroy({
      where: { id: req.params.id }
    });
    if (!rowsDeleted) {
      return res.status(404).json({ message: 'No Tag Found with this id!' });  // If no tag was deleted
    }
    res.json({ message: 'Poof! Like it was never here.' });  // Respond with success
  } catch (err) {
    res.status(500).json({ message: 'Tag removal issue.' });  // Handle potential errors
  }
});



module.exports = router;    // Export router