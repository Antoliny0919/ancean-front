import { client } from './client';

export const getPost = (query) => client.get(`api/posts/?${query}`);

export const createPost = ({ body, headers }) =>
  client.post(
    'api/posts/',
    {
      ...body,
    },
    {
      headers: headers,
    },
  );

export const savePost = ({ body, headers }) =>
  client.patch(
    'api/posts/',
    {
      ...body,
    },
    {
      headers: headers,
    },
  );

export const deletePost = ({ id, headers }) =>
  client.delete('api/posts/', {
    headers: headers,
    data: { id: id },
  });
