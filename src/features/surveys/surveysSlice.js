import { createSlice } from '@reduxjs/toolkit';

// Slice object
export const surveySlice = createSlice({
    name:'surveySlice',
    initialState: [],
    reducers: {
        loadData: (state, action) => {
            return action.payload
        },
        reset: () => {return []}
    },
});

// Selectors

// Exports
export const {loadData, reset} = surveySlice.actions;

export default surveySlice.reducer;