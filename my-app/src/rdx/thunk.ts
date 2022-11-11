import { searchCocktails,searchCocktailIngridient, searchCocktailIngridientList, searchCocktailsByIngridient } from "../services/cocktailsService";
import {  cocktailsActions, getCocktailsASYNCActions, getCocktailsByIngridient, getCocktailsIngridientAsyncActions, getIngredientsList } from "../rdx/Cocktails/actions";
import { ThunkAction} from "redux-thunk";
import { CocktailsState } from "./Cocktails/reducer";


export const fetchSearchCocktails = (queryString: string): ThunkAction<Promise<void>, CocktailsState , undefined, cocktailsActions > => 
  async (dispatch) => {
    try {
      dispatch(getCocktailsASYNCActions.request());
      const response = await searchCocktails(queryString);
      if(response.success && response.response){
        dispatch(getCocktailsASYNCActions.success(response.response));
      }else{
        dispatch(getCocktailsASYNCActions.failure({error : 'Something went Wrong!'}));
      }
    }catch{
      dispatch(getCocktailsASYNCActions.failure({error : 'Something went Wrong!'}));
    }
  };

export const fetchSearchCocktailsIgridient = (queryString: string): ThunkAction<Promise<void>, CocktailsState , undefined, cocktailsActions > => 
  async (dispatch) => {
    try {
      dispatch(getCocktailsIngridientAsyncActions.request());
      const response = await searchCocktailIngridient(queryString);
      if(response.success && response.response){
        dispatch(getCocktailsIngridientAsyncActions.success(response.response));
      }else{
        dispatch(getCocktailsIngridientAsyncActions.failure({error : 'Something went Wrong!'}));
      }
    }catch{
      dispatch(getCocktailsIngridientAsyncActions.failure({error : 'Something went Wrong!'}));
    }
  };

  export const fetchIgridientsList = (): ThunkAction<Promise<void>, CocktailsState , undefined, cocktailsActions > => 
  async (dispatch) => {
    try {
      dispatch(getIngredientsList.request());
      const response = await searchCocktailIngridientList();
      if(response.success && response.response){
        dispatch(getIngredientsList.success(response.response));
      }else{
        dispatch(getIngredientsList.failure({error : 'Something went Wrong!'}));
      }
    }catch{
      dispatch(getIngredientsList.failure({error : 'Something went Wrong!'}));
    }
  };

  export const fetchCocktailsByIngridient = (queryString: string): ThunkAction<Promise<void>, CocktailsState , undefined, cocktailsActions > => 
  async (dispatch) => {
    try {
      dispatch(getCocktailsByIngridient.request());
      const response = await searchCocktailsByIngridient(queryString);
      if(response.success && response.response){
        dispatch(getCocktailsByIngridient.success(response.response));
      }else{
        dispatch(getCocktailsByIngridient.failure({error : 'Something went Wrong!'}));
      }
    }catch{
      dispatch(getCocktailsByIngridient.failure({error : 'Something went Wrong!'}));
    }
  };