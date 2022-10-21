import { RootState } from "./index";

export const selectCocktailsData = (state: RootState) => state.cocktails.list;
