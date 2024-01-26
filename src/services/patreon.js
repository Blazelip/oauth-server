import got from 'got';

async function postPatreonToken(code) {
  const url = 'https://www.patreon.com/api/oauth2/token';

  const form = {
    code,
    grant_type: 'authorization_code',
    client_id: 'AmtrHmff3rgLCnwZSepcc4gw5127gMTyFe5X_2q4qMPVGYwkqmCnJrf4C0YDg8gn',
    client_secret: 'fJ_NdSAiYT8MrayjREm8Doo8xOwWyimxznCyQ480LUZVoMtG9g6lojnkMxIFmhhG',
    redirect_uri: 'https://fastify-oauth-server.onrender.com/patreon/oauth',
  };

  try {
    const response = await got.post(url, {
      form, // shorthand for form: form
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    console.log("🚀 ~ postPatreonToken ~ response:", response.body);

    const { access_token: token } = response.body;
    console.log(token); // log the response body
    return token;
    // TODO: Process the response body as needed
  } catch (error) {
    throw new Error('Failed to retrieve access token');
  }
}

export default postPatreonToken;
