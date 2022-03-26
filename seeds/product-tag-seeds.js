const { ProductTag } = require('../models');
//under shirts category (id 4) product_id: 1
//under misc categoriy (id 5) product_id: 2
// under handwear category (id 1) product_id: 3
 //under hats category (id 3) product_id: 4
 //under shorts category (id 2) product_id: 5
 // tag id: 1 (striped), 2 (black), 3(blue), 4(red), 5(green), 6(white) 7 (gold), 8 (patterned)

const productTagData = [
  {
    product_id: 1,// if look above, 
                  // shirts is product id 1,
                  // tag_id is 6, there for this product is white gloves
    tag_id: 6,
  },
  {
    product_id: 1,
    tag_id: 7,
  },
  {
    product_id: 1,
    tag_id: 8,
  },
  {
    product_id: 2,
    tag_id: 2,
  },
  {
    product_id: 3,
    tag_id: 1,
  },
  {
    product_id: 3,
    tag_id: 3,
  },
  {
    product_id: 3,
    tag_id: 4,
  },
  {
    product_id: 3,
    tag_id: 5,
  },
  {
    product_id: 4,
    tag_id: 1,
  },
  {
    product_id: 4,
    tag_id: 2,
  },
  {
    product_id: 4,
    tag_id: 8,
  },
  {
    product_id: 5,
    tag_id: 3,
  },
];

const ProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = ProductTags;
