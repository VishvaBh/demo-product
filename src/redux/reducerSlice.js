import { createSlice } from "@reduxjs/toolkit";

const reducerSlice = createSlice({
  name: 'reducer',
  initialState: { demo: 0 },
  reducers: {
    demoAction(action, state) {
      state.push({
        demo: action.payload,
      });
    },
  },

});

export const { demoAction } = reducerSlice.actions;
export default reducerSlice.reducer;
