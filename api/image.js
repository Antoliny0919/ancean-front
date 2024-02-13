import { client } from './client';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const uploadImage = ({ formData }) =>
  client.post('api/uploadImage/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'X-CSRFToken': cookies.get('csrftoken'),
    },
    withCredentials: false,
  });
