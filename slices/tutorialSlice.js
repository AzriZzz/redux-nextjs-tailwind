import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const tutorialSlice = createSlice({
  name: 'tutorial',
  initialState,
  reducers: {
    // Action - 
    // 1. merely a function that returns an action object
    // 2. only source of information for the store

    // purpose: only save only 1 object inside state
    selectTutorial: (state, action) => {
      state.items = [action.payload];
    },
  }
})

export const { selectTutorial } = tutorialSlice.actions;

// Selector - function that accepts Redux state as an argument
export const selectItems = (state) => state.tutorial.items;

export default tutorialSlice.reducer;
