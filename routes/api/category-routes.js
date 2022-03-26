const router = require('express').Router();
const { Category, Product } = require('../../models');



router.get('/', async (req, res) => {
  // find every category, ensuring the associated model: product is included
    try{
      const categoryData = await Category.findAll({
        include: [{model: Product}],
      });
        console.log(categoryData); // category data console log  
        res.status(200).json(categoryData);
      } catch (err){
        res.status(500).json(err);
    }
      });

router.get('/:id', async (req, res) => {
  // find a  single category (by id), ensuring the associated model:product is included
    try{
      const categoryData = await Category.findByPk(req.params.id, {
        include: [{model:Product}],
      });
     res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
      });

router.post('/', async (req, res) => {
 // create single category 
  try{
      const categoryData = await Category.create({
        category_name: req.body.category_name,
      });
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(400).json(err);
    }
      });

router.put('/:id', async (req, res) => {
 // using id, update category 
    try{
      const updatedCategory = await Category.update({
        category_name: req.body.category_name,
       },
        {
          where: {
            id: req.params.id,
          },
        }
        );

      res.status(200).json(updatedCategory);
    } catch (err) {
      res.status(400).json(err);
    }
      });

router.delete('/:id', async (req, res) => {
 // using id, delete category
    try{
      const deletedCategory = await Category.destroy({
       where: {
          id: req.params.id,
        },
      });
      res.status(200).json(deletedCategory);
    } catch (err) {
      res.status(400).json(err);
    }
      });

    module.exports = router;
