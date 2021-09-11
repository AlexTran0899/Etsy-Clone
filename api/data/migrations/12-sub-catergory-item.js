exports.up = async (knex) => {
    await knex.schema
        .createTable('subCategoryItem', (subCategoryItem) => {
            subCategoryItem.increments('subCategoryItem_id')
            subCategoryItem.integer('subCategory_id')
            .references('subCategory_id')
            .inTable('subCategory')
            .onDelete('cascade')
            .onUpdate('cascade')
            subCategoryItem.string('subCategoryItem')
        })
}
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('subCategoryItem')
}
