const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');



// get all product
router.get('/', async (req, res) => {
// find all products, ensuring its associated model:category and tag are returned
  try{
    const productData = await Product.findAll({
      include: [{model: Category, model:Tag}],
    });

    res.status(200).json(productData);
  } catch (err){
    res.status(500).json(err);
  }
});

// get one product
router.get('/:id', async (req, res) => {
// find one product using id, ensuring its associated model:category and tag are returned
  try{
    const productData = await Product.findByPk(req.params.id, {
      include: [{model:Category, model:Tag}],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product
router.post('/', (req, res) => {

  Product.create(req.body)
    .then((product) => {
      //if product tags exist create pairings 
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put('/:id', (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // using tags, find all associated products
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // fetch list of current product tag ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // create filtered list of the new product tags
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // using tag_id to filter out products to be removed
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // destroy, then create
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', async (req, res) => {
// using id, delete a single product
  try{
    const deletedProduct = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletedProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});

    module.exports = router;



  /* example format for creating new product
    {
      product_name: "test",
      price: 100.00,
      stock: 5,
      tagIds: [1, 2, 3, 4]
    }
  */