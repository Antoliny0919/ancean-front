import client from './client';

export const createPost = (fields) =>
  client.post('api/posts/', {
    ...fields,
  });

export const savePost = (fields) =>
  client.patch('api/posts/', {
    ...fields,
  });

export const getSavedPosts = () => client.get('api/posts?is_finish=false');

export const getPost = (id) => client.get(`api/posts?id=${id}`);
