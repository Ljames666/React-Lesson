import { createSlice } from '@reduxjs/toolkit';
// import cocktail from './data/drink';
const initialState = {
  loading: false,
  hasErrors: false,
  cocktails: [],
};

const slice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {
    getCocktails: (state) => {
      state.loading = true;
    },
    getCocktailsSuccess: (state, { payload }) => {
      state.cocktails = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getCocktailsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
  extraReducers: {},
});

export const { getCocktails, getCocktailsSuccess, getCocktailsFailure } = slice.actions;

export default slice.reducer;

export function fetchCocktails() {
  return async (dispatch) => {
    dispatch(getCocktails());

    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();

      dispatch(getCocktailsSuccess(data.drinks));
    } catch (error) {
      dispatch(getCocktailsFailure());
    }
  };
}
