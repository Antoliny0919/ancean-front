import client from './client';

export const createPost = (fields) =>
  client.post('api/posts/', {
    ...fields,
  });

export const savePost = ({ postId, fields }) =>
  client.patch('api/posts', {
    id: postId,
    ...fields,
  });
