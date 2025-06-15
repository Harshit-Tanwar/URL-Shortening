import { createSlice } from '@reduxjs/toolkit';

const intialState = {
    user: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: intialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
        register: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        setError: (state, action) => {
            state.error = action.payload.error;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const { login, logout, register, setError, clearError } = authSlice.actions;
export default authSlice.reducer;