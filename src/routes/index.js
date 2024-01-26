import postPatreonToken from '../services/patreon.js';

async function routes(fastify) {
  fastify.get('/', async (req, reply) => ({ hello: 'world' }));

  fastify.get('/patreon/oauth', async (req, reply) => {
    const { state, code } = req.query;
    console.log("🚀 ~ fastify.get ~ code:", code);
    console.log("🚀 ~ fastify.get ~ state:", state);
    const patreonToken = postPatreonToken(code);
    console.log("🚀 ~ fastify.get ~ patreonToken:", patreonToken);

    return patreonToken;
  });
}

export default routes;
