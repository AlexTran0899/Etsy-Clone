exports.seed = function (knex) {
  return knex('subCategory').insert([
    { category_id: 1, subCategory:'Accessories'},
    { category_id: 1, subCategory:'Bags & Purses'},
    { category_id: 1, subCategory:'Necklaces'},
    { category_id: 1, subCategory:'Rings'},
    { category_id: 1, subCategory:'Earrings'},
    { category_id: 1, subCategory:'Bracelets'},
    { category_id: 1, subCategory:'Body Jewelry'},
    { category_id: 2, subCategory:"Women's"},
    { category_id: 2, subCategory:"Men's"},
    { category_id: 2, subCategory:"Kids' & Baby"},
    { category_id: 2, subCategory:'Bags & Purses'},
    { category_id: 3, subCategory:'Home'},
    { category_id: 3, subCategory:'Bath & Beauty'},
    { category_id: 3, subCategory:'Pet Supplies'},
    { category_id: 4, subCategory:'Party Supplies'},
    { category_id: 4, subCategory:'Invitations & Paper'},
    { category_id: 4, subCategory:'Wedding Decorations'},
    { category_id: 4, subCategory:'Wedding Gifts'},
    { category_id: 4, subCategory:'Wedding Accessories'},
    { category_id: 4, subCategory:'Wedding Clothing'},
    { category_id: 4, subCategory:'Wedding Jewelry'},
    { category_id: 5, subCategory:'Toys'},
    { category_id: 5, subCategory:'Electronics & Accessories'},
    { category_id: 5, subCategory:'Books'},
    { category_id: 5, subCategory:'Movies & Music'},
    { category_id: 6, subCategory:''},
    { category_id: 7, subCategory:'Home & Hobby'},
    { category_id: 7, subCategory:'Jewelry & Beauty'},
    { category_id: 7, subCategory:'Sewing & Fiber'},
    { category_id: 7, subCategory:'Papercraft'},
    { category_id: 7, subCategory:'Visual Arts'},
    { category_id: 7, subCategory:'Sculpting & Forming'},
    { category_id: 8, subCategory:'Gift Guides'},
    { category_id: 8, subCategory:'Gift cards'},
  ]);
};





























