import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const tutorialSlice = createSlice({
  name: 'tutorial',
  initialState,
  reducers: {
    // Action
    addToTutorial: (state, action) => {
      console.log(state, action)
      state.items = [...state.items, action.payload];
    },
  }
})

export const { addToTutorial } = tutorialSlice.actions;

// Selector
export const selectItems = (state) => state.tutorial.items;


export default tutorialSlice.reducer;
