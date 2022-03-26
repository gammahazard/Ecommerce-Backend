const { Category } = require('../models');
// category test data for seeding
const categoryData = [
  {
     category_name: 'HandWear', // category_id:
                                // 1
  },
  {
     category_name: 'Shorts', // 2
  },
  {
     category_name: 'Hats', //3
  },
  {
     category_name: 'Shirts', //4
  },
  {
     category_name: 'Misc', //5
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

  module.exports = seedCategories;
