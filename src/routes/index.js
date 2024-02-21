import requestPatreonToken from '../services/patreon.js';
import Token from '../models/Token.js';

async function routes(fastify) {
  fastify.get('/', async (req, reply) => ({ hello: 'world' }));

  fastify.get('/patreon/oauth', async (req) => {
    const { state, code } = req.query;
    const currentTime = new Date();

    const {
      access_token: accessToken,
      expires_in: tokenExpiration,
      refresh_token: refreshToken,
    } = await requestPatreonToken(code);

    const expirationTime = new Date(currentTime.getTime() + tokenExpiration * 1000);
    await Token.query().insert({
      userId: parseInt(state, 10),
      accessToken,
      tokenExpiration: expirationTime,
      refreshToken,
    });
  });
}

export default routes;
