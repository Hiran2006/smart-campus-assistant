import { google } from 'googleapis'

const clientId = process.env.GOOGLE_CLIENT_ID
const clientSecret = process.env.GOOGLE_CLIENT_SECRET
const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI

const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri)

function getAuthUrl() {
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['email', 'profile'],
  })
}

async function getToken(code: string) {
  return await oauth2Client.getToken(code)
}

async function verifyToken(idToken: string) {
  return await oauth2Client.verifyIdToken({
    idToken,
    audience: clientId,
  })
}
export { getAuthUrl, getToken, verifyToken }
