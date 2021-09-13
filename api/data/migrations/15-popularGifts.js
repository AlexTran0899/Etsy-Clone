exports.up = async (knex) => {
    await knex.schema
        .createTable('popularGifts', (uniquePicks) => {
            uniquePicks.increments('popularGifts_id')
            uniquePicks.string('popularGifts_imageUrl')
            uniquePicks.string('popularGifts_Name')
            uniquePicks.string('popularGifts_Seller')
            uniquePicks.integer('popularGifts_price')
            uniquePicks.integer('store_rating')
            uniquePicks.integer('store_star')

        })
}
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('popularGifts')
}
