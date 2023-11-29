import axios from 'axios';

const client = axios.create();

const isProduction = process.env.NODE_ENV === 'production';

client.defaults.baseURL = isProduction ? '' : 'http://localhost:5050';

// client.defaults.baseURL = isProduction ? '' : 'http://api-local:8000';

export default client;
