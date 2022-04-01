import { configureStore } from '@reduxjs/toolkit';
import ListPhoneReducer from './ListPhoneSlice';
import PhoneReducer from './verifyPhoneSlice';

import GeoLocationIpReducer from './geoLocIpSlice';
import SeachCepReducer from './seachCepSlice';

const store = configureStore({
  reducer: {
    listPhone: ListPhoneReducer,
    phone: PhoneReducer,
    seachCep: SeachCepReducer,
    geoLocationIp: GeoLocationIpReducer,
  },
});
export default store;
