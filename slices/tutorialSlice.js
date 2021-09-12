import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: [],
  lists: [],
  filtered: []
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
      state.selected = [action.payload];
    },

    saveListTutorial: (state,action) => {
      state.lists = [action.payload]
    },

    saveFiltered: (state,action) => {
      state.filtered = [action.payload]
    }
  }
})

export const { selectTutorial, saveListTutorial, saveFiltered } = tutorialSlice.actions;

// Selector - function that accepts Redux state as an argument
export const selectItems = (state) => state.tutorial.selected;
export const searchTutorial = (state) => state.tutorial.filtered;

export default tutorialSlice.reducer;
