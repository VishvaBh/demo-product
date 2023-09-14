import { createSlice } from "@reduxjs/toolkit";

const reducerSlice = createSlice({
  name: 'reducer',
  initialState: { product: {} },
  reducers: {
    setCurrentProduct(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.product = action.payload;
    },
  },

});

export const { setCurrentProduct } = reducerSlice.actions;
export default reducerSlice.reducer;
