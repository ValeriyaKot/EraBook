import axios from 'axios';

const API_URL = 'http://192.168.100.4:8000/api/';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;