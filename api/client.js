import axios from 'axios';

export const noneClient = axios.create();

const client = axios.create();

const isProduction = process.env.NODE_ENV === 'production';

noneClient.defaults.baseURL = isProduction ? '' : 'http://api-local:8000';

client.defaults.baseURL = isProduction ? '' : 'http://localhost:5050';

// client.defaults.baseURL = isProduction ? '' : 'http://api-local:8000';

export default client;
