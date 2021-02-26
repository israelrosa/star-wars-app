import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
  timeout: 10000,
  maxContentLength: 100,
});

export default api;
