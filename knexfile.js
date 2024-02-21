import path from 'path';
import { fileURLToPath } from 'url';
import { knexSnakeCaseMappers } from 'objection';

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const migrations = {
  directory: path.join(__dirname, 'src', 'migrations'),
};

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
  migrations,
  ...knexSnakeCaseMappers(),
};

// `mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=admin`
// postgres://filyukov:UrBWWBvCaldOq7uU7vfMKpIVL3UMvwOG@dpg-cmqdqi7109ks73fbotgg-a.frankfurt-postgres.render.com/private_tg
