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

    // {"access_token": "2Usre1r6M_ELi4oyd41athWJ9rvtbXH35tbDBg2Z070", "expires_in": 2678400, "token_type": "Bearer", "scope": "identity w:campaigns.benefits campaigns.members campaigns.members.address campaigns.members[email] campaigns.posts w:campaigns.posts w:campaigns.webhook campaigns.webhook campaigns w:campaigns.apps apps.tiers identity[email] identity.memberships w:identity.clients", "refresh_token": "jJ6ZZp0Hb3PwQ1nc2BniOfvO7WtH1WKA0nLHl5Uw6sg", "version": "0.0.1"}
  });
}

export default routes;
