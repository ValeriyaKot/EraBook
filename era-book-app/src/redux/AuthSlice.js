// src/redux/authSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../services/api'; // Импортируем apiClient
import AsyncStorage from '@react-native-async-storage/async-storage';

// Асинхронный экшен для логина
export const loginUser = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await apiClient.post('auth/login/', credentials); // Запрос на логин
    const { access, refresh } = response.data;

    // Сохраняем токены в AsyncStorage
    await AsyncStorage.setItem('accessToken', access);
    await AsyncStorage.setItem('refreshToken', refresh);

    return { access, refresh };
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Ошибка авторизации');
  }
});

// Slice для аутентификации
const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null, loading: false, error: null },
  reducers: {
    logout: (state) => {
      state.token = null;
      AsyncStorage.removeItem('accessToken');
      AsyncStorage.removeItem('refreshToken');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.access;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
