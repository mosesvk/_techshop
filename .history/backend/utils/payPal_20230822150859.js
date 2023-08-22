import dotenv from 'dotenv';
dotenv.config();
const { PAYPAL_CLIENT_ID: CLIENT_ID, PAYPAL_APP_SECRET: APP_SECRET } = process.env;

const baseURL = {
  sandbox: "https://api-m.sandbox.paypal.com",
  production: "https://api-m.paypal.com"
};

console.log([PAYPAL_CLIENT_ID, PAYPAL_APP_SECRET])


// generate an access token using client id and app secret
async function generateAccessToken() {
  const auth = Buffer.from(CLIENT_ID + ":" + APP_SECRET).toString("base64")
  const response = await fetch(`${baseURL.sandbox}/v1/oauth2/token`, {
    method: "POST",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });
  const data = await response.json();
  return data.access_token;
}