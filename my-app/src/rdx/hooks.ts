import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { cocktailsActions } from "./actions";
import { CocktailsState } from "./reducer";

export const useAppDispatch: () => ThunkDispatch<CocktailsState,undefined,cocktailsActions> = useDispatch;