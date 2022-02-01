import { createSlice } from '@reduxjs/toolkit';

// Slice object
export const createSurveySlice = createSlice({
    name:'createSurveySlice',
    initialState: [],
    reducers: {
        addElement: (state, action) => {
            state.push(action.payload)
        },
        removeElement: (state,action) => {
            state.filter(recipe => recipe.id !== action.payload.id)
        },
    },
});

// Selectors

// Exports
export const {addElement, removeElement, statusType} = createSurveySlice.actions;

export default createSurveySlice.reducer;