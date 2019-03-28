import { sessionService } from 'redux-react-session';

export const API_BASE_URL = process.env.REACT_APP_API_URL;
export const API_TOKEN = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const API_SECRET = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';

export const HEADERS = {
  Token: API_TOKEN,
  Secret: API_SECRET,
  Accept: 'application/json',
};

export async function getHeaders(isFormData = false) {
  const headers = HEADERS;

  if (!isFormData) {
    headers['Content-Type'] = 'application/json';
  }

  try {
    const user = await sessionService.loadUser();
    if (user && user.id) {
      headers['SESSION-GI'] = `${user.id}.${user.userToken}`;
    }
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
  }

  return headers;
}
