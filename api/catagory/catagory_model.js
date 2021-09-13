const db = require('../data/db-config')

async function get_all() {
    const catagorys = await db('category')
    const subCategory = await db('subCategory')
    const subCategoryItem = await db('subCategoryItem')
    const uniquePicks = await db('uniquePicks')
    const popularGifts = await db('popularGifts')
    let data = catagorys.map(catagory => {
        catagory.subCatagories = subCategory.filter(id =>
            id.category_id === catagory.category_id)
        catagory.subCatagories.map(item => {
            item.sub = subCategoryItem.filter(each =>
                each.subCategory_id === item.subCategory_id
            )
            return item
        })
        return catagory
    })
    data.push(uniquePicks)
    data.push(popularGifts)
    return data
}

module.exports = {
    get_all
}
