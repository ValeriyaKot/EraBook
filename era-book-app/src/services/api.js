// src/services/api.js

import axios from 'axios';

// Создание общего axios клиента с базовым URL
const API_URL = 'http://127.0.0.1:8000/api/';

const apiClient = axios.create({
  baseURL: API_URL, // Базовый URL для всех запросов
  headers: {
    'Content-Type': 'application/json', // Тип контента
  },
});

export default apiClient;