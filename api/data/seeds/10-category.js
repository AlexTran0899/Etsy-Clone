exports.seed = function (knex) {
  return knex('category').insert([
    { category_name: 'Jewelry & Accessories', editorpickImg: 'https://i.etsystatic.com/11266858/r/il/c8a5e3/2871445103/il_340x270.2871445103_ot9g.jpg', editorpickimgTitle: 'Jewelry, handbags, and accessories' },
    { category_name: 'Clothing & Shoes', editorpickImg: 'https://i.etsystatic.com/12140445/d/il/0ece73/973255252/il_340x270.973255252_qmb6.jpg?version=1', editorpickimgTitle: "Women's fashion" },
    { category_name: 'Home & Living', editorpickImg: 'https://i.etsystatic.com/15639703/d/il/ffc1de/2104888170/il_340x270.2104888170_oz1y.jpg?version=0', editorpickimgTitle: "Design ideas and inspiration" },
    { category_name: 'Wedding & Party', editorpickImg: 'https://i.etsystatic.com/11604743/d/il/50b2d1/1935240134/il_340x270.1935240134_kfje.jpg?version=0', editorpickimgTitle: 'The Wedding Shop' },
    { category_name: 'Toys & Entertainment', editorpickImg: 'https://i.etsystatic.com/13285848/c/1663/1320/6/0/il/04e625/1574085717/il_340x270.1574085717_scw6.jpg', editorpickimgTitle: 'Home tech accessories' },
    { category_name: 'Art & Collectibles', editorpickImg: 'https://i.etsystatic.com/11266858/d/il/d7bf92/2850689528/il_340x270.2850689528_ooux.jpg?version=0', editorpickimgTitle: 'Home gallery' },
    { category_name: 'Craft Supplies', editorpickImg: 'https://i.etsystatic.com/21803635/d/il/1d254b/3195135618/il_340x270.3195135618_qbc7.jpg?version=0', editorpickimgTitle: 'DIY craft projects' },
    { category_name: 'Gifts & Gift Cards' },
  ]);
};





