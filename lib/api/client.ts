import axios from 'axios';

const client = axios.create();

const {SERVER_URL} = process.env;

client.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/' : SERVER_URL;
client.defaults.withCredentials = true;

export default client;
