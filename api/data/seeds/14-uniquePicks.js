exports.seed = function (knex) {
  return knex('uniquePicks').insert([
    { uniquePicksimageUrl: 'https://i.etsystatic.com/22396532/r/il/b07ecf/2465523526/il_300x300.2465523526_18gz.jpg', uniquePicksName:'Halloween'},
    { uniquePicksimageUrl: 'https://i.etsystatic.com/8676740/r/il/154cf6/3293635899/il_300x300.3293635899_klvj.jpg', uniquePicksName:'Fall Finds'},
    { uniquePicksimageUrl: 'https://i.etsystatic.com/23313978/r/il/8b59dc/2599114750/il_300x300.2599114750_li1c.jpg', uniquePicksName:'Storage & Organization'},
    { uniquePicksimageUrl: 'https://i.etsystatic.com/5153755/r/il/c4d2f6/179141092/il_300x300.179141092.jpg', uniquePicksName:'Personalized Gifts'},
    { uniquePicksimageUrl: 'https://i.etsystatic.com/21553855/r/il/1a379e/2953453691/il_300x300.2953453691_dch1.jpg', uniquePicksName:'Jewelry'},
    { uniquePicksimageUrl: 'https://i.etsystatic.com/20442851/r/il/333e1f/2593998914/il_300x300.2593998914_2y4e.jpg', uniquePicksName:'On Sale'},
  ]);
};



























