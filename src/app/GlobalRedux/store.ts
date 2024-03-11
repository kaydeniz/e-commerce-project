'use client';

import { configureStore } from '@reduxjs/toolkit';
import dealershipsReducer from '@/app/GlobalRedux/Features/dealerships/dealershipsSlice';

export const store = configureStore({
    reducer: {
        dealerships: dealershipsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;