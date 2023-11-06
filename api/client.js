import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'http://localhost:5050';

export default client;
