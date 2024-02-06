import { configureStore } from '@reduxjs/toolkit';
import { addressReducer } from './addessSlice';

export const store = configureStore({ reducer: { address: addressReducer } });