import { RootState } from "../index";

export const selectCocktailsData = (state: RootState) => state.cocktails.list;
export const selectIsDataLoading = (state: RootState) => state.cocktails.isListLoading;
export const selectCocktailsIngridientData = (state: RootState) => state.cocktails.ingridientsList;