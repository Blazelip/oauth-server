import { knexSnakeCaseMappers } from 'objection';

export default {
  client: 'pg',
  connection: {
    host: 'dpg-cmqdqi7109ks73fbotgg-a.frankfurt-postgres.render.com', // Full hostname
    user: 'filyukov',
    password: 'UrBWWBvCaldOq7uU7vfMKpIVL3UMvwOG',
    database: 'private_tg',
    port: 5432,
    ssl: {
      rejectUnauthorized: false, // or more secure SSL configuration
    },
  },
  ...knexSnakeCaseMappers(),
};
