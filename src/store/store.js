import { configureStore } from '@reduxjs/toolkit';
import ListPhoneReducer from './ListPhoneSlice';

const store = configureStore({
  reducer: {
    listPhone: ListPhoneReducer,
  },
});
export default store;
