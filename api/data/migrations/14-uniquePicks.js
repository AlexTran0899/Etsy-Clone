exports.up = async (knex) => {
    await knex.schema
        .createTable('uniquePicks', (uniquePicks) => {
            uniquePicks.increments('uniquePicks_id')
            uniquePicks.string('uniquePicksimageUrl')
            uniquePicks.string('uniquePicksName')
        })
}
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('uniquePicks')
}
