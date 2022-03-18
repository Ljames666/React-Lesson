import { combineReducers } from 'redux';
import RandomFoodReducer from './RandomFoodSlice';
import CocktailsReducer from './RandomCocktailsSlice';

// import theme from './ThemeSlice';

const rootReducer = () => (state, action) => {
  const combinedReducer = combineReducers({
    randomFood: RandomFoodReducer,
    cocktails: CocktailsReducer,
  });

  return combinedReducer(state, action);
};

export default rootReducer;
