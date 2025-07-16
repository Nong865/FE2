import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // JSON Server URL
});

export default api;
