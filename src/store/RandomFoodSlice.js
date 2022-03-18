import { createSlice } from '@reduxjs/toolkit';
// import food from './data/meals';

const initialState = {
  loading: false,
  hasErrors: false,
  recipes: [],
};

const slice = createSlice({
  name: 'randomFood',
  initialState,
  reducers: {
    getRecipes: (state) => {
      state.loading = true;
    },
    getRecipesSuccess: (state, { payload }) => {
      state.recipes = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getRecipesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
  extraReducers: {},
});

export const { getRecipes, getRecipesSuccess, getRecipesFailure } = slice.actions;

export default slice.reducer;

export function fetchRecipes() {
  return async (dispatch) => {
    dispatch(getRecipes());

    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();

      dispatch(getRecipesSuccess(data.meals));
    } catch (error) {
      dispatch(getRecipesFailure());
    }
  };
}
