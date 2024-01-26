import postPatreonToken from '../services/patreon.js';

async function routes(fastify) {
  fastify.get('/', async (req, reply) => ({ hello: 'world' }));

  fastify.get('/patreon/oauth', async (req, reply) => {
    const { state, code } = req.query;
    const patreonToken = postPatreonToken(code);

    return patreonToken;
  });
}

export default routes;
