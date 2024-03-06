const createSlice = require("@reduxjs/toolkit").createSlice;

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

module.exports = parfaitSlice.reducer;
module.exports.parfaitActions = parfaitSlice.actions;
