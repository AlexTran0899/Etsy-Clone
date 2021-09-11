exports.seed = function (knex) {
  return knex('category').insert([
    { category_name: 'Jewelry & Accessories'},
    { category_name: 'Clothing & Shoes'},
    { category_name: 'Home & Living'},
    { category_name: 'Wedding & Party'},
    { category_name: 'Toys & Entertainment'},
    { category_name: 'Art & Collectibles'},
    { category_name: 'Craft Supplies'},
    { category_name: 'Gifts & Gift Cards'},
  ]);
};





