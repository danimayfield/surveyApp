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
            state.filter(question => question.questionId !== action.payload.quesitonId)
        },
        reset: () => {return []}
    },
});

// Selectors

// Exports
export const {addElement, removeElement, reset} = createSurveySlice.actions;

export default createSurveySlice.reducer;