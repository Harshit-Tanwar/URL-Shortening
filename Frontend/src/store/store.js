import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice'; // Adjust the path as necessary

export const store = configureStore({
  reducer: {
    auth: authReducer, // Assuming you have an authReducer defined
  },
});

export default store;