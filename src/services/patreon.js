import got from 'got';

async function requestPatreonToken(code) {
  const url = 'https://www.patreon.com/api/oauth2/token';

  const form = {
    code,
    grant_type: 'authorization_code',
    client_id: 'AmtrHmff3rgLCnwZSepcc4gw5127gMTyFe5X_2q4qMPVGYwkqmCnJrf4C0YDg8gn',
    client_secret: 'fJ_NdSAiYT8MrayjREm8Doo8xOwWyimxznCyQ480LUZVoMtG9g6lojnkMxIFmhhG',
    redirect_uri: 'https://filyukov.de/patreon/oauth',
  };

  try {
    console.log('hier');
    const response = await got.post(url, {
      form,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    console.log("🚀 ~ postPatreonToken ~ response:", response)

    const responseObj = JSON.parse(response.body);
    console.log("🚀 ~ postPatreonToken ~ responseObj:", responseObj)
    return responseObj;
  } catch (error) {
    throw new Error('Failed to retrieve access token');
  }
}

export default requestPatreonToken;
