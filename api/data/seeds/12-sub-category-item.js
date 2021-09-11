exports.seed = function (knex) {
  return knex('subCategoryItem').insert([
    { subCategory_id: 1, subCategoryItem:'Hats & Caps'},
    { subCategory_id: 1, subCategoryItem:'Hair Accessories'},
    { subCategory_id: 1, subCategoryItem:'Sunglasses & Eyewear'},
    { subCategory_id: 1, subCategoryItem:'Scarves & Wraps'},
    { subCategory_id: 1, subCategoryItem:'Belts & Suspenders'},
    { subCategory_id: 1, subCategoryItem:'Keychains & Lanyards'},
    { subCategory_id: 1, subCategoryItem:'Gloves & Mittens'},
    { subCategory_id: 1, subCategoryItem:'Sun Hats'},
    { subCategory_id: 1, subCategoryItem:'Umbrellas & Rain Accessories'},
    { subCategory_id: 1, subCategoryItem:'Hats & Caps'},

    { subCategory_id: 2, subCategoryItem:'Backpacks'},
    { subCategory_id: 2, subCategoryItem:'Handbags'},
    { subCategory_id: 2, subCategoryItem:'Diaper Bags'},
    { subCategory_id: 2, subCategoryItem:'Luggage & Duffel Bags'},
    { subCategory_id: 2, subCategoryItem:'Phone Cases'},


    { subCategory_id: 3, subCategoryItem:'Pendants'},
    { subCategory_id: 3, subCategoryItem:'Chokers'},
    { subCategory_id: 3, subCategoryItem:'Charm Necklaces'},
    { subCategory_id: 3, subCategoryItem:'Crystal Necklaces'},
    { subCategory_id: 3, subCategoryItem:'Monogram & Name Necklaces'},
    { subCategory_id: 3, subCategoryItem:'Beaded Necklaces'},
    { subCategory_id: 3, subCategoryItem:'Chains'},
    { subCategory_id: 3, subCategoryItem:'Bib Necklaces'},
    { subCategory_id: 3, subCategoryItem:'Tassel Necklaces'},

    { subCategory_id: 4, subCategoryItem:'Stackable Rings'},
    { subCategory_id: 4, subCategoryItem:'Statement Rings'},
    { subCategory_id: 4, subCategoryItem:'Bands'},
    { subCategory_id: 4, subCategoryItem:'Signet Rings'},
    { subCategory_id: 4, subCategoryItem:'Multi-Stone Rings'},
    { subCategory_id: 4, subCategoryItem:'Solitaire Rings'},
    { subCategory_id: 4, subCategoryItem:'Midi Rings'},
    { subCategory_id: 4, subCategoryItem:'Wedding & Engagement'},

    { subCategory_id: 5, subCategoryItem:'Dangle & Drop Earrings'},
    { subCategory_id: 5, subCategoryItem:'Stud Earrings'},
    { subCategory_id: 5, subCategoryItem:'Hoop Earrings'},
    { subCategory_id: 5, subCategoryItem:'Chandelier Earrings'},
    { subCategory_id: 5, subCategoryItem:'Ear Jackets & Climbers'},
    { subCategory_id: 5, subCategoryItem:'Cluster Earrings'},
    { subCategory_id: 5, subCategoryItem:'Cuff & Wrap Earrings'},
    { subCategory_id: 5, subCategoryItem:'Clip-On Earrings'},

    { subCategory_id: 6, subCategoryItem:'Beaded Bracelets'},
    { subCategory_id: 6, subCategoryItem:'Bangles'},
    { subCategory_id: 6, subCategoryItem:'Charm Bracelets'},
    { subCategory_id: 6, subCategoryItem:'Woven & Braided Bracelets'},
    { subCategory_id: 6, subCategoryItem:'Cuff Bracelets'},
    { subCategory_id: 6, subCategoryItem:'Chain & Link Bracelets'},

    { subCategory_id: 7, subCategoryItem:'Anklets'},
    { subCategory_id: 7, subCategoryItem:'Hair Jewelry'},
    { subCategory_id: 7, subCategoryItem:'Nose Rings & Studs'},
    { subCategory_id: 7, subCategoryItem:'Arm Bands'},
    { subCategory_id: 7, subCategoryItem:'Nipple Jewelry'},
    { subCategory_id: 7, subCategoryItem:'Belly Rings'},
    { subCategory_id: 7, subCategoryItem:'Shoulder Jewelry'},
    { subCategory_id: 7, subCategoryItem:'Toe Rings'},
    { subCategory_id: 7, subCategoryItem:'Lip Rings'},
  //
  
    { subCategory_id: 8, subCategoryItem:"Women's Clothing"},
    { subCategory_id: 8, subCategoryItem:"Women's Shoes"},

    { subCategory_id: 9, subCategoryItem:"Men's Clothing"},
    { subCategory_id: 9, subCategoryItem:"Men's Shoes"},

    { subCategory_id: 10, subCategoryItem:"Baby Girls' Clothing"},
    { subCategory_id: 10, subCategoryItem:"Girls' Clothing"},
    { subCategory_id: 10, subCategoryItem:"Baby Boys' Clothing"},
    { subCategory_id: 10, subCategoryItem:"Boys' Clothing"},
    { subCategory_id: 10, subCategoryItem:"Girls' Shoes"},
    { subCategory_id: 10, subCategoryItem:"Boys' Shoes"},

    { subCategory_id: 11, subCategoryItem:"Backpacks"},
    { subCategory_id: 11, subCategoryItem:"Handbags"},
    { subCategory_id: 11, subCategoryItem:"Diaper Bags"},
    { subCategory_id: 11, subCategoryItem:"Luggage & Duffel Bags"},
    { subCategory_id: 11, subCategoryItem:"Phone Cases"},


    { subCategory_id: 12, subCategoryItem:"Home Decor"},
    { subCategory_id: 12, subCategoryItem:"Rugs"},
    { subCategory_id: 12, subCategoryItem:"Furniture"},
    { subCategory_id: 12, subCategoryItem:"Bedding"},
    { subCategory_id: 12, subCategoryItem:"Bathroom"},
    { subCategory_id: 12, subCategoryItem:"Outdoor & Gardening"},
    { subCategory_id: 12, subCategoryItem:"Storage & Organization"},
    { subCategory_id: 12, subCategoryItem:"Office"},
    { subCategory_id: 12, subCategoryItem:"Lighting"},
    { subCategory_id: 12, subCategoryItem:"Kitchen & Dining"},
    { subCategory_id: 12, subCategoryItem:"Food & Drink"},
    { subCategory_id: 12, subCategoryItem:"Spirituality & Religion"},

    { subCategory_id: 13, subCategoryItem:"Bath Accessories"},
    { subCategory_id: 13, subCategoryItem:"Makeup & Cosmetics"},
    { subCategory_id: 13, subCategoryItem:"Skin Care"},
    { subCategory_id: 13, subCategoryItem:"Hair Care"},
    { subCategory_id: 13, subCategoryItem:"Essential Oils"},
    { subCategory_id: 13, subCategoryItem:"Fragrances"},
    { subCategory_id: 13, subCategoryItem:"Soaps & Bath Bombs"},
    { subCategory_id: 13, subCategoryItem:"Sex Toys"},
    { subCategory_id: 13, subCategoryItem:"Face Masks & Coverings"},

    { subCategory_id: 14, subCategoryItem:"Pet Collars & Leashes"},
    { subCategory_id: 14, subCategoryItem:"Pet Furniture"},
    { subCategory_id: 14, subCategoryItem:"Pet Clothing & Shoes"},
    { subCategory_id: 14, subCategoryItem:"Pet Bedding"},
    { subCategory_id: 14, subCategoryItem:"Pet Carriers & Houses"},

    { subCategory_id: 15, subCategoryItem:"Party Decor"},
    { subCategory_id: 15, subCategoryItem:"Baking & Cake Decoration"},

    { subCategory_id: 16, subCategoryItem:"Invitations & Announcements"},
    { subCategory_id: 16, subCategoryItem:"Greeting Cards"},
    { subCategory_id: 16, subCategoryItem:"Gift Wrapping"},
    { subCategory_id: 16, subCategoryItem:"Holiday & Seasonal Cards"},
    { subCategory_id: 16, subCategoryItem:"Stationery"},

    { subCategory_id: 17, subCategoryItem:"Centerpieces"},
    { subCategory_id: 17, subCategoryItem:"Cake Toppers"},
    { subCategory_id: 17, subCategoryItem:"Serving & Dining"},
    { subCategory_id: 17, subCategoryItem:"Candles & Holders"},
    { subCategory_id: 17, subCategoryItem:"Baskets & Boxes"},
    { subCategory_id: 17, subCategoryItem:"Ring Bearer Pillows"},
    { subCategory_id: 17, subCategoryItem:"Plants"},

    { subCategory_id: 18, subCategoryItem:"Bridesmaids Gifts"},
    { subCategory_id: 18, subCategoryItem:"Wedding Favors"},
    { subCategory_id: 18, subCategoryItem:"Gifts For The Couple"},
    { subCategory_id: 18, subCategoryItem:"Groomsmen Gifts"},
    { subCategory_id: 18, subCategoryItem:"Guest Books"},
    { subCategory_id: 18, subCategoryItem:"Portraits & Frames"},
    { subCategory_id: 18, subCategoryItem:"Albums & Scrapbooks"},

    { subCategory_id: 19, subCategoryItem:"Something Blue"},
    { subCategory_id: 19, subCategoryItem:"Bouquets & Corsages"},
    { subCategory_id: 19, subCategoryItem:"Veils"},
    { subCategory_id: 19, subCategoryItem:"Bags & Purses"},
    { subCategory_id: 19, subCategoryItem:"Cover Ups & Scarves"},
    { subCategory_id: 19, subCategoryItem:"Hair Accessories"},
    { subCategory_id: 19, subCategoryItem:"Cummerbunds"},
    { subCategory_id: 19, subCategoryItem:"Neckties"},
    { subCategory_id: 19, subCategoryItem:"Umbrellas"},
    { subCategory_id: 19, subCategoryItem:"Hats"},

    { subCategory_id: 20, subCategoryItem:"Dresses"},
    { subCategory_id: 20, subCategoryItem:"Lingerie & Garters"},
    { subCategory_id: 20, subCategoryItem:"Suits"},

    { subCategory_id: 21, subCategoryItem:"Earrings"},
    { subCategory_id: 21, subCategoryItem:"Rings"},
    { subCategory_id: 21, subCategoryItem:"Necklaces"},
    { subCategory_id: 21, subCategoryItem:"Bracelets"},
    { subCategory_id: 21, subCategoryItem:"Jewelry Sets"},

    { subCategory_id: 22, subCategoryItem:"Baby & Toddler Toys"},
    { subCategory_id: 22, subCategoryItem:"Dolls & Action Figures"},
    { subCategory_id: 22, subCategoryItem:"Stuffed Animals"},
    { subCategory_id: 22, subCategoryItem:"Games & Puzzles"},
    { subCategory_id: 22, subCategoryItem:"Learning & School"},
    { subCategory_id: 22, subCategoryItem:"Kids' Crafts"},
    { subCategory_id: 22, subCategoryItem:"Slime & Foam"},

    { subCategory_id: 23, subCategoryItem:"Cell Phone Accessories"},
    { subCategory_id: 23, subCategoryItem:"Gadgets"},
    { subCategory_id: 23, subCategoryItem:"Video Games"},
    { subCategory_id: 23, subCategoryItem:"Decals & Skins"},
    { subCategory_id: 23, subCategoryItem:"Cameras"},
    { subCategory_id: 23, subCategoryItem:"Computers & Peripherals"},

    { subCategory_id: 24, subCategoryItem:"Blank Books"},
    { subCategory_id: 24, subCategoryItem:"Calendars & Planners"},
    { subCategory_id: 24, subCategoryItem:"Book Accessories"},
    { subCategory_id: 24, subCategoryItem:"Children's Books"},
    { subCategory_id: 24, subCategoryItem:"Art & Photography Books"},
    { subCategory_id: 24, subCategoryItem:"Comics & Graphic Novels"},
    { subCategory_id: 24, subCategoryItem:"Craft & Hobby Books"},
    { subCategory_id: 24, subCategoryItem:"Literature & Fiction"},
    { subCategory_id: 24, subCategoryItem:"Poetry"},
    { subCategory_id: 24, subCategoryItem:"Guides & How Tos"},
    { subCategory_id: 24, subCategoryItem:"Zines & Magazines"},

    { subCategory_id: 25, subCategoryItem:"Musical Instruments"},
    { subCategory_id: 25, subCategoryItem:"Instrument Straps"},
    { subCategory_id: 25, subCategoryItem:"Recorded Audio"},
    { subCategory_id: 25, subCategoryItem:"Sheet Music"},
    { subCategory_id: 25, subCategoryItem:"All Movies"},
    { subCategory_id: 25, subCategoryItem:"All Music"},

    { subCategory_id: 27, subCategoryItem:"Woodworking & Carpentry"},
    { subCategory_id: 27, subCategoryItem:"Home Improvement"},
    { subCategory_id: 27, subCategoryItem:"Electronics & Circuitry"},
    { subCategory_id: 27, subCategoryItem:"Framing"},
    { subCategory_id: 27, subCategoryItem:"Doll & Model Making"},
    { subCategory_id: 27, subCategoryItem:"Candle Making"},
    { subCategory_id: 27, subCategoryItem:"Food & Fermenting"},
    { subCategory_id: 27, subCategoryItem:"Floral & Garden Crafts"},

    { subCategory_id: 28, subCategoryItem:"Jewelry Making & Beading"},
    { subCategory_id: 28, subCategoryItem:"Makeup & Face Painting"},

    { subCategory_id: 29, subCategoryItem:"Knitting"},
    { subCategory_id: 29, subCategoryItem:"Crochet"},
    { subCategory_id: 29, subCategoryItem:"Sewing"},
    { subCategory_id: 29, subCategoryItem:"Quilting"},
    { subCategory_id: 29, subCategoryItem:"Embroidery"},
    { subCategory_id: 29, subCategoryItem:"Cross Stitch"},

    { subCategory_id: 30, subCategoryItem:"Card Making & Stationery"},
    { subCategory_id: 30, subCategoryItem:"Scrapbooking"},
    { subCategory_id: 30, subCategoryItem:"Bookbinding"},
    { subCategory_id: 30, subCategoryItem:"Stamping"},
    { subCategory_id: 30, subCategoryItem:"Origami"},
    { subCategory_id: 30, subCategoryItem:"Party & Gifting"},


    { subCategory_id: 31, subCategoryItem:"Painting"},
    { subCategory_id: 31, subCategoryItem:"Printing & Printmaking"},
    { subCategory_id: 31, subCategoryItem:"Drawing & Drafting"},
    { subCategory_id: 31, subCategoryItem:"Photography"},
    { subCategory_id: 31, subCategoryItem:"Collage"},
    { subCategory_id: 31, subCategoryItem:"Calligraphy & Pens"},


    { subCategory_id: 32, subCategoryItem:"Ceramics & Pottery"},
    { subCategory_id: 32, subCategoryItem:"Metalworking"},
    { subCategory_id: 32, subCategoryItem:"Carving & Whittling"},

    { subCategory_id: 33, subCategoryItem:"Gifts for Her"},
    { subCategory_id: 33, subCategoryItem:"Gifts for Him"},
    { subCategory_id: 33, subCategoryItem:"Gifts for Kids"},
    { subCategory_id: 33, subCategoryItem:"Gifts for Pets"},
    { subCategory_id: 33, subCategoryItem:"Personalized gifts"},
    { subCategory_id: 33, subCategoryItem:"Black-owned Etsy shops"},
    { subCategory_id: 33, subCategoryItem:"Latinx-owned Etsy Shops"},
    { subCategory_id: 33, subCategoryItem:"Birthday gifts"},
    { subCategory_id: 33, subCategoryItem:"Anniversary Gifts"},
    { subCategory_id: 33, subCategoryItem:"Gifts under $30"},
    { subCategory_id: 33, subCategoryItem:"Gifts under $50"},


    { subCategory_id: 34, subCategoryItem:"Shop gift cards"},
    { subCategory_id: 34, subCategoryItem:"Redeem gift cards"},



    
















    




































  ]);
};



























