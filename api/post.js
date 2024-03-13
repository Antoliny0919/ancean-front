import { client } from './client';

export const getPost = ({ query, headers = {} }) =>
  client.get(`api/posts/?${query}`, { headers: headers });

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
