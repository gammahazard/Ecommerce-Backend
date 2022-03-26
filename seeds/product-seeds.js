const { Product } = require('../models');
// product data for test seeding
  const productData = [
  {
    product_name: 'T-Shirt',
    price: 4.99,
    stock: 140,
    category_id: 4, //under shirts product_id: 1
  },
  {
    product_name: 'Desk Chair',
    price: 40.00,
    stock: 250,
    category_id: 5, //under misc product_id: 2
  },
  {
    product_name: 'Gloves',
    price: 99.99,
    stock: 120,
    category_id: 1, // under handwear category product_id: 3
  },
  {
    product_name: 'Sombrero',
    price: 13.99,
    stock: 500,
    category_id: 3, //under hats product_id: 4
  },
  {
    product_name: 'Cargo Shorts',
    price: 14.99,
    stock: 77,
    category_id: 2, //under shorts product_id: 5
  },
];

      const seedProducts = () => Product.bulkCreate(productData);

      module.exports = seedProducts;
