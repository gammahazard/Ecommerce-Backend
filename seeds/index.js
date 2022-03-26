const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
        await sequelize.sync({ force: true });
      console.log('\n<------- DATABASE SYNCED SUCCESSFULLY ------->\n');
        await seedCategories();
      console.log('\n<------- CATEGORIES SEEDED SUCCESSFULLY ------->\n');

        await seedProducts();
      console.log('\n<------- PRODUCTS SEEDED SUCCESSFULLY ------->\n');

        await seedTags();
       console.log('\n<------- TAGS SEEDED SUCCESSFULLY ------->\n');

      await seedProductTags();
      console.log('\n<------- PRODUCT TAGS SEEDED SUCCESSFULLY ------->\n');

            process.exit(0);
  };

  seedAll();
