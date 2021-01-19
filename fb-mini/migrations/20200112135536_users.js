exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('first_name')
    .notNullable()

  table
    .string('last_name')
    .notNullable()

  table
    .date('birthday')
    .notNullable()

  table
    .string('email')
    .unique()
    .notNullable()

  table
    .text('bio', 'mediumtext')

  table
    .string('password')
    .notNullable()

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
