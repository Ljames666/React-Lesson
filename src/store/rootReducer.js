import { combineReducers } from '@reduxjs/toolkit';
import ListPhone from './ListPhoneSlice';

// import theme from './ThemeSlice';

const createReducer = () => (state, action) => {
  const combinedReducer = combineReducers({
    ListPhone,
  });

  return combinedReducer(state, action);
};

export default createReducer;
