import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiGeoLocationIp from '../services/ApiIPGeoLoc';

export const fecthGeoLocationIp = createAsyncThunk('phone/fecthGeoLocationIp', async () => {
  const result = await ApiGeoLocationIp(
    `https://ipgeolocation.abstractapi.com/v1/?api_key=52526ac4867e4d56b6a02187f9e594b5`
  );
  return result;
});

const geoLocationIpSlice = createSlice({
  name: 'geoLocationIp',
  initialState: {},
  reducers: {},
  extraReducers: {
    // eslint-disable-next-line no-return-assign
    [fecthGeoLocationIp.fulfilled]: (state, action) => (state = action),
  },
});

export const geoLocationIpSelector = (state) => state.geoLocationIp;
export default geoLocationIpSlice.reducer;
