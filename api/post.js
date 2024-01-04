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

export const getAllPosts = () => client.get('api/posts/');

export const deletePost = (id) =>
  client.delete('api/posts/', {
    data: { id: id },
  });
