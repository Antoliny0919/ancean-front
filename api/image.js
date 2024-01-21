import { client } from './client';

export const uploadImage = ({ formData }) =>
  client.post('api/uploadImage/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: false,
  });
