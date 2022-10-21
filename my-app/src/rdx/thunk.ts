import { searchCocktails } from "../services/cocktailsService";
import {  getCocktailsASYNCActions } from "./actions";
import { ThunkAction} from "redux-thunk";
import { cocktailsActions } from "./actions";
import { CocktailsState } from "./reducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";


export const fetchSearchCocktails = (queryString: string): ThunkAction<Promise<void>, CocktailsState , undefined, AnyAction > => 
  async (dispatch:ThunkDispatch<CocktailsState,undefined,cocktailsActions>) => {
    try {
      dispatch(getCocktailsASYNCActions.request());
      const response = await searchCocktails(queryString);
      if(response.success && response.response){
        dispatch(getCocktailsASYNCActions.success(response.response));
        console.log('response', response.response);
      }else{
        dispatch(getCocktailsASYNCActions.failure({error : 'Something went Wrong!'}));
      }
    }catch{
      dispatch(getCocktailsASYNCActions.failure({error : 'Something went Wrong!'}));
    }
  };