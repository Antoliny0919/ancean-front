import client from './client';

export const signin = ({ email, password }) =>
  client.post('api/token/', { email, password });

export const getAuthcode = ({ email }) =>
  client.post('api/mail/code/', { email });
