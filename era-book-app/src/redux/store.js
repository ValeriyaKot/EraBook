// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice'; // Импортируем редьюсер аутентификации

export const store = configureStore({
  reducer: {
    auth: authReducer, // Указываем редьюсер для аутентификации
  },
});
