import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfParfaits: 15,
};

const parfaitSlice = createSlice({
  name: "parfait",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfParfaits--;
    },
    restocked: (state, action) => {
      state.numOfParfaits += action.payload;
    },
  },
});

export default parfaitSlice.reducer;
export const { ordered, restocked } = parfaitSlice.actions;
