import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducerSlice';

export const store = configureStore({
  reducer: {
    reducer,
  },
});
