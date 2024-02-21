import { config } from 'dotenv';
import knex from 'knex';
import { Model } from 'objection';

import app from './server.js';
import routes from './routes/index.js';
import knexConfig from '../knexfile.js';

config();

const db = knex(knexConfig);
Model.knex(db);

// Register routes and plugins
app.register(routes);

// Start the server
const start = async () => {
  try {
    await app.listen({
      port: process.env.SERVER_PORT ?? 3000,
      host: '0.0.0.0',
    });
    console.log(`Server listening on ${app.server.address().port}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
