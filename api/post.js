import client from './client';

export const createPost = (fields) =>
  client.post('api/posts/', {
    ...fields,
  });

export const savePost = (fields) =>
  client.patch('api/posts/', {
    ...fields,
  });
