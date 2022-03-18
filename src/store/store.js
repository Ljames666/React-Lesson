import { configureStore } from '@reduxjs/toolkit';
import RandomFoodReducer from './RandomFoodSlice';
import CocktailsReducer from './RandomCocktailsSlice';

const store = configureStore({
  reducer: {
    randomFood: RandomFoodReducer,
    cocktails: CocktailsReducer,
  },
});
export default store;
