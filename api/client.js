import axios from 'axios';

// const SERVER_URI = {
//   local: 'api-local:8000',
//   dev: 'api-dev:8000',
// };

// const CLIENT_URI = {
//   local: 'localhost:5050',
//   dev: 'localhost:6060',
// };

export const server = axios.create();

export const client = axios.create();

server.defaults.baseURL = `http://api-local:8000`;
client.defaults.baseURL = `http://localhost:5050`;

// const MEDIA_ROOT = `${client.defaults.baseURL}/media`;

// server.defaults.baseURL = `http://host.docker.internal:80`;
// client.defaults.baseURL = `http://localhost:80`;

// server.defaults.baseURL = `http://api-local:8000`;
// client.defaults.baseURL = `http://localhost:80`;
