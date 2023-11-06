import client from './client';

export const signIn = ({ id, password }) =>
  client.post('/api/auth/signin', { id, password });

export const getAuthcode = ({ email }) =>
  client.post('/api/mail/code', { email });
