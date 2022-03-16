import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const slice = createSlice({
  name: 'ListPhone',
  initialState,
  reducers: {
    setNumber: (state, action) => [...state, action.payload],

    removeNumber: (state, action) => state.filter((phone) => phone.name !== action.payload.name),
  },
});

export const { setNumber, removeNumber } = slice.actions;
export default slice.reducer;
