import { config } from 'dotenv';
import app from './server.js';
import routes from './routes/index.js';

config();
// Register routes and plugins
app.register(routes);

// Start the server
const start = async () => {
  try {
    await app.listen({
      port: process.env.SERVER_PORT ?? 3000,
    });
    console.log(`Server listening on ${app.server.address().port}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();