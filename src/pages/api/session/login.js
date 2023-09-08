'use server'

var url = require('url');

import { getAuth } from "firebase-admin/auth"; // Import getAuth from firebase-admin
import admin from "../../../configs/firebase-admin";

export default async function handler(req, res) {
    console.log('Session: login start')
    const { idToken } = req.body;    
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    return getAuth()
    .createSessionCookie(idToken, { expiresIn })
    .then(
      (sessionCookie) => {
        // Set cookie policy for session cookie.
        res.setHeader('Set-Cookie',`session=${sessionCookie}; Max-Age=${expiresIn}; HttpOnly; Path=/; SameSite=Strict;`);
        console.log('redirecting...')
        return res.status(200).send();
      },
      (error) => {
        console.error(error);
        res.status(401).send('UNAUTHORIZED REQUEST!');
      }
    );
}