exports.up = async (knex) => {
    await knex.schema
        .createTable('category', (category) => {
            category.increments('category_id')
            category.string('category_name')
        })
}
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('category')
}
