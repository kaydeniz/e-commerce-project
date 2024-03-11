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
            const newData = action.payload;
            const isDuplicate = state.list.some((item: any) => {
                return JSON.stringify(item) === JSON.stringify(newData);
            });
            if (!isDuplicate) {
                state.list.push(newData);
            } else {
                console.log('Already exists in the list.');
            }
        }
    }
})

export const { addData } = dealershipsSlice.actions;

export default dealershipsSlice.reducer;
