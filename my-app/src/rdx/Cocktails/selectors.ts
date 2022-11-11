import { RootState } from "../index";

export const selectCocktailsData = (state: RootState) => state.cocktails.list;
export const selectIsDataLoading = (state: RootState) => state.cocktails.isListLoading;
export const selectCocktailsIngridientData = (state: RootState) => state.cocktails.ingridientsList;
export const selectAllIngridientData = (state: RootState) => state.cocktails.allIngridientsList;
export const selectCocktailsByIngridientData = (state: RootState) => state.cocktails.cocktailsByIngridient;
export const selectCocktailsIngridientName = (state: RootState) => state.cocktails.itemName;