exports.up = async (knex) => {
    await knex.schema
        .createTable('subCategory', (subCategory) => {
            subCategory.increments('subCategory_id')
            subCategory.integer('category_id')
            .references('category_id')
            .inTable('category')
            .onDelete('cascade')
            .onUpdate('cascade')
            subCategory.string('subCategory')
        })
}
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('subCategory')
}
