exports.up = async knex => knex.schema.createTable('posts', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))

    table
        .uuid('userID')
        .references('users.id')
        .notNullable()
    
    table
        .text('text', 'longtext')
        .notNullable()
    
    table
        .date('date_posted')
        .notNullable()
    
    table
        .integer('likes')
        .notNullable()

    table.timestamps(true)
})


exports.down = async knex => knex.schema.dropTableIfExists('posts')

