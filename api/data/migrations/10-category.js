exports.up = async (knex) => {
    await knex.schema
        .createTable('category', (category) => {
            category.increments('category_id')
            category.string('category_name')
            category.string('editorpickImg')
            category.string('editorpickimgTitle')

        })
}
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('category')
}
