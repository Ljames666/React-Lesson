import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiGetPhone from '../services/ApiPhone';

export const fecthVerifyPhone = createAsyncThunk('phone/fecthVerifyPhone', async (number) => {
  const result = ApiGetPhone(
    `https://phonevalidation.abstractapi.com/v1/?api_key=06bd83512cef40298626ef8eabae24b6&phone=${number}`
  );
  return result;
});

const phoneSlice = createSlice({
  name: 'phone',
  initialState: {},
  reducers: {},
  extraReducers: {
    // eslint-disable-next-line no-return-assign
    [fecthVerifyPhone.fulfilled]: (state, action) => (state = action.payload),
  },
});

export const phoneSelector = (state) => state.phone;
export default phoneSlice.reducer;
