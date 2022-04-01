import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiSeachCep from '../services/ApiIPGeoLoc';

export const fecthSeachCep = createAsyncThunk('phone/fecthSeachCep', async (cep) => {
  const result = await ApiSeachCep(`https://api.postmon.com.br/v1/cep/${cep}`);
  return result;
});

const seachCepSlice = createSlice({
  name: 'seachCep',
  initialState: {},
  reducers: {},
  extraReducers: {
    // eslint-disable-next-line no-return-assign
    [fecthSeachCep.fulfilled]: (state, action) => (state = action.payload),
  },
});

export const seachCepSelector = (state) => state.seachCep;
export default seachCepSlice.reducer;
