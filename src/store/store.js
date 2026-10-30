import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './createSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});