import axios from 'axios';

export const server = axios.create();

export const client = axios.create();

const isProduction = process.env.NODE_ENV === 'production';

server.defaults.baseURL = isProduction
  ? 'http://host.docker.internal:80'
  : 'http://api-local:8000';

client.defaults.baseURL = isProduction
  ? 'http://localhost:80'
  : 'http://localhost:5050';
