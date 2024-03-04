import { client } from './client';

export const createPost = (fields) =>
  client.post('api/posts/', {
    ...fields,
  });

export const savePost = (fields) =>
  client.patch('api/posts/', {
    ...fields,
  });

export const getPost = (query) => client.get(`api/posts?${query}`);

export const deletePost = (id) =>
  client.delete('api/posts/', {
    data: { id: id },
  });
