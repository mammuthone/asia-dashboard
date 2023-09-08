var url = require('url');
// import admin from '../../configs/firebase-admin';
import { getAuth } from "firebase-admin/auth"; // Import getAuth from firebase-admin

const auth = getAuth();

const LOGIN_URL = '/pages/login';

const redirectFunction = response => (code, location) => {
  console.log(`Operating redirect: ${location}`);
  response.redirect(code, location);
}

export default async function handler(req, res) {
  console.log('session Logout handler')

  const redirectFunctionWithResponse = redirectFunction(res);

  const sessionCookie = req.cookies["session"] || '';
  res.setHeader(
    "Set-Cookie",
    "session=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
  );
  if (!sessionCookie) res.redirect('/pages/error');
  return auth
    .verifySessionCookie(sessionCookie)
    .then(async (decodedClaims) => {
      console.log('revokeRefreshTokens');
      return auth.revokeRefreshTokens(decodedClaims.sub)
        .then(redirectFunctionWithResponse(307, LOGIN_URL));
    })
    .catch((error) => {
      console.error(error)
      console.log('Session Logout: Redirect to "/pages/error/"')
      res.redirect(500, '/pages/error')
    });
}