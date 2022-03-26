const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// `/api/tags` endpoint

router.get('/', async (req, res) => {
// find all tags, ensure its associated model:product data is returned
  try{
    const tagData = await Tag.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(tagData);
  } catch (err){
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
// find a single tag using id, ensuring its associated model:product data is returned
  try{
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{model:Product}],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
    const tagData = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
// using id value, update an existing tag
  try{
    const updatedTag = await Tag.update({
      tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
  );
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
// using id value, delete an existing tag
  try{
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletedTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

    module.exports = router;
