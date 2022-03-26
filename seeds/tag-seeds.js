const { Tag } = require('../models');
// defines product appearance
const tagData = [
  {
    tag_name: 'striped', //tag_id: 1
  },
  {
    tag_name: 'black',    //2
  },
  {
    tag_name: 'blue',     //3
  },
  {
    tag_name: 'red',    //4
  },
  {
    tag_name: 'green',    //5
  },
  {
    tag_name: 'white',    //6
  },
  {
    tag_name: 'gold',   //7
  },
  {
    tag_name: 'patterned',    //8
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
