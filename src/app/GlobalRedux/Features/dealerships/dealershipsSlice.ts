'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface ListState {
    list: any;
}

const initialState: ListState = {
    list: []
}

export const dealershipsSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addData: (state, action) => {
            state.list = [...state.list, action.payload];
        }
    }
})

export const { addData } = dealershipsSlice.actions;

export default dealershipsSlice.reducer;
