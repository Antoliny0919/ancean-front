import client from './client';

export const savePost = ({ title, author, category, content, state }) =>
  client.post('api/posts/test/', {
    title,
    author,
    category,
    content,
    is_finish: state,
  });
