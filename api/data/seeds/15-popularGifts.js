exports.seed = function (knex) {
  return knex('popularGifts').insert([
    { popularGifts_imageUrl: 'https://i.etsystatic.com/19311499/r/il/b4be61/1839533908/il_1588xN.1839533908_lgk6.jpg', 
    popularGifts_Name:'Anniversary Gift for Him,Personalized Wallet,Mens Wallet,Engraved Wallet,Leather Wallet,Custom Wallet,Boyfriend Gift for Men,Gift for Dad' ,
     popularGifts_Seller: 'StayFinePersonalized' , popularGifts_price: 2899, store_rating: 15677, store_star: 5},

    { popularGifts_imageUrl: 'https://i.etsystatic.com/23453173/r/il/8bec99/2971714122/il_1588xN.2971714122_1zpr.jpg',
     popularGifts_Name:'Birth Flower Birthday Gift Box, Personalized birthday ideas, birthday present, gift for best friend - BdayFlower-dEGB' , 
     popularGifts_Seller: 'ErynsHomeAndGifts' , popularGifts_price: 2175, store_rating: 4158, store_star: 5},

    { popularGifts_imageUrl: 'https://i.etsystatic.com/11914445/r/il/45900a/2272082398/il_1588xN.2272082398_gan9.jpg',
     popularGifts_Name:'Personalized Charcuterie Planks and Beer Flights - 4 Styles and Gift Sets Available' ,
      popularGifts_Seller: 'leftcoastoriginal' , popularGifts_price: 5570, store_rating: 16460, store_star: 5},

    { popularGifts_imageUrl: 'https://i.etsystatic.com/20794438/r/il/1729a1/3064051493/il_1588xN.3064051493_n36q.jpg', 
    popularGifts_Name:'Personalized Turkish Towel, personalized gifts, Holiday, Home Decor, Bachelorette Towel, Bridesmaid Gift Box, Wedding Towel' , 
    popularGifts_Seller: 'WholesaleTowels' , popularGifts_price: 270, store_rating: 4071, store_star: 5},

    { popularGifts_imageUrl: 'https://i.etsystatic.com/17305851/r/il/0346e8/3330272535/il_1588xN.3330272535_iu4r.jpg', 
    popularGifts_Name:'Personalized Name Puzzle With Pegs, New Baby Gift, Wooden Toys, Baby Shower, Christmas Gifts for Kids, Wood Toddler Toys, First Birthday' , 
    popularGifts_Seller: 'BusyPuzzle' , popularGifts_price: 268, store_rating: 27202, store_star: 5},

  ]);
};



























