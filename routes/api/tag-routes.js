const router = require('express').Router();   // Import Express Router
const { Tag, Product, ProductTag } = require('../../models');   

// The `/api/tags` endpoint


// FIND/GET ALL TAGS .. be sure to include its associated Product data
router.get async ('/', (req, res) => {
  Tag.findAll().then((tagData) => {
    res.json(tagData);
  });
});


// FIND A SINGLE TAG BY ITS ID ... be sure to include its associated Product data
router.get('/:id', (req, res) => {
  try {
    const tagData = await User.findByPk(req.params.id);
    if (!tagData) {
      res.status(404).json({ message: 'No Tag Found with this id!' });
      return;
    }
    res.status(200).json(tagDataData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// CREATE A NEW TAG
router.post('/', (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE A TAG'S NAME BY ITS 'ID' VALUE
router.put('/:id', (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
      individualHooks: true
    });
    if (!tagData[0]) {
      res.status(404).json({ message: 'No Tag Found with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// DELETE ON TAG BY ITS 'ID' VALUE
router.delete('/:id', (req, res) => {         // Route to delete a tag by its ID
  Tag.destroy({                               // Use Sequelize's "destroy" method to remove tag based on its ID
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => res.json(err));
});


module.exports = router;    // Export router