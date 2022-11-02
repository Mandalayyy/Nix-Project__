import { RootState } from "..";

export const selectOwnCocktailsData = (state:RootState) => state.ownCocktails.data;
export const selectItemId = (state:RootState) => state.ownCocktails.itemId;