import requestPatreonToken from '../services/patreon.js';
import Token from '../models/Token.js';

async function routes(fastify) {
  fastify.get('/', async (req, reply) => ({ hello: 'world' }));

  fastify.get('/patreon/oauth', async (req) => {
    const { state, code } = req.query;
    const {
      access_token: accessToken,
      expires_in: tokenExpiration,
      refresh_token: refreshToken,
    } = await requestPatreonToken(code);
    await Token.query().insert({
      userId: state,
      accessToken,
      tokenExpiration,
      refreshToken,
    });
  });
}

export default routes;
