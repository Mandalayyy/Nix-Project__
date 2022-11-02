import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { cocktailsActions } from "../rdx/Cocktails/actions";
import { CocktailsState } from "./Cocktails/reducer";
import { OwnCocktailsActions } from "./OwnCocktails/reducer";

export const useAppDispatch: () => ThunkDispatch<CocktailsState,undefined,cocktailsActions | OwnCocktailsActions> = useDispatch;