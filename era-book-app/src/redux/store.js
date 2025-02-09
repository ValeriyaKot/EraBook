import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import bookReducer from "./BooksSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer, 
    genres: bookReducer, 
  },
});
