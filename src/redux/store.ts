import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import entryReducer from './entrySlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    entry: entryReducer
  },
});

export default store;
