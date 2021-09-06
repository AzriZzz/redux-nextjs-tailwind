import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const tutorialSlice = createSlice({
  name: 'tutorial',
  initialState,
  reducers: {
    // Action
    selectTutorial: (state, action) => {
      console.log(action.payload)
      state.items = [action.payload];
    },
  }
})

export const { selectTutorial } = tutorialSlice.actions;

// Selector
export const selectItems = (state) => state.tutorial.items;


export default tutorialSlice.reducer;
