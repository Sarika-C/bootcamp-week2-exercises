exports.up = async knex => knex.schema.createTable('friends', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))

    table
        .uuid('requesterID')
        .references('users.id')
        .notNullable()

    table
        .uuid('requesteeID')
        .references('users.id')
        .notNullable()
    
    table
        .date('date_requested')
        .notNullable()
    
    table 
        .enum('status', ['Accepted', 'Declined', 'Requested'])
        .notNullable()

    table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('friends')
