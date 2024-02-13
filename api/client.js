import axios from 'axios';

const SERVER_URI = {
  local: 'api-local:8000',
  dev: 'api-dev:8000',
};

const CLIENT_URI = {
  local: 'localhost:5050',
  dev: 'localhost:6060',
};

export const server = axios.create();

export const client = axios.create();

server.defaults.baseURL = `http://${SERVER_URI[process.env.EXECUTION_ENV]}`;
client.defaults.baseURL = `http://${CLIENT_URI[process.env.EXECUTION_ENV]}`;
