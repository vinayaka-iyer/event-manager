import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../services/auth/authSlice';
import { apiSlice } from '../services/apiSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer, // Register the auth slice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});

export default store;