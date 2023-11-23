import client from './client';

export const signin = ({ email, password }) =>
  client.post('api/token/', { email, password });

export const oauthSignin = ({ social, code }) =>
  client.get(`api/oauth/?social=${social}&code=${code}`);

export const getAuthcode = ({ email }) =>
  client.post('api/mail/code/', { email });

export const loadSignup = (formData) => client.post('api/user/', formData);
