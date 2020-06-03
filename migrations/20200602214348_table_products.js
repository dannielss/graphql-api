
exports.up = function(knex) {
  return knex.schema.createTable('products', table => {
    table.increments('id').primary()
    table.string('name').notNull().unique()
    table.integer('quantity').notNull()
    table.float('price').notNull()
  }).then(function() {
    return knex('products').insert([
      { name: 'Arroz', quantity: 16, price: 14.50 }
    ])
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('products')
};
