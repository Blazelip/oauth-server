export const up = (knex) => (
  knex.schema.createTable('patreon_tokens', (table) => {
    table.increments('id').primary();
    table.string('user_id');
    table.string('access_token');
    table.string('token_expiration');
    table.string('refresh_token');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
);

export const down = (knex) => knex.schema.dropTable('patreon_tokens');
