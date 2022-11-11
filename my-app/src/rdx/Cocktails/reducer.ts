import { ActionType, getType } from 'typesafe-actions';
import { allIngridientsList, cocktailIngridientSearch, cocktailsSearchResponse } from '../../services/models';
import * as Actions from './actions';
import { COCKTAILS_ACTIONS, COCKTAILS_BY_INGRIDIENTS_ACTIONS, COCKTAILS_INGRIDIENT_ACTIONS, INGRIDIENTS_ACTIONS, GET_ITEM } from './actions';

export interface CocktailsState   {
   list: Array<cocktailsSearchResponse>;
   isListLoading: boolean;
   ingridientsList: Array<cocktailIngridientSearch>; 
   allIngridientsList: Array<allIngridientsList>,
   cocktailsByIngridient: Array<cocktailsSearchResponse>,
   itemName?: string | null,
}

export type cocktailsActions = ActionType<typeof Actions >;



const initialState: CocktailsState = {
  list: [],
  isListLoading: false,
  ingridientsList: [],
  allIngridientsList: [],
  cocktailsByIngridient: [],
  itemName: null
};

export const reducer = (state: CocktailsState = initialState, action: cocktailsActions ) => {
  console.log('state', state);
  console.log('actions', action);
  switch(action.type){
  case COCKTAILS_ACTIONS.GET_COCKTAILS_REQUEST:
    return{
      ...state,
      isListLoading: true,
    };
  case COCKTAILS_ACTIONS.GET_COCKTAILS_SUCCESS:
    return{
      
      ...state,
      list:  action.payload.drinks,
      isListLoading: false,
    };
   
  case COCKTAILS_ACTIONS.GET_COCKTAILS_FAILED:
    return{
      ...state,
      isListLoading: false,
    };
  case COCKTAILS_INGRIDIENT_ACTIONS.GET_COCKTAILS_INGRIDIENT_REQUEST:
    return{
      ...state,
      isListLoading: true,
    };
  case COCKTAILS_INGRIDIENT_ACTIONS.GET_COCKTAILS_INGRIDIENT_SUCCESS:
    return{
      ...state,
      ingridientsList: action.payload.drinks,
      isListLoading: false,
    };
  case COCKTAILS_INGRIDIENT_ACTIONS.GET_COCKTAILS_INGRIDIENT_FAILED:
    return{
      ...state,
      isListLoading: false,
    };
  case INGRIDIENTS_ACTIONS.GET_INGRIDIENTS_REQUEST:
    return{
      ...state,
      isListLoading: true
    };
  case INGRIDIENTS_ACTIONS.GET_INGRIDIENTS_SUCCESS:
    return{
      ...state,
      allIngridientsList: action.payload.drinks,
      isListLoading: false,
    };
  case INGRIDIENTS_ACTIONS.GET_INGRIDIENTS_FAILED:
    return{
      ...state,
      isListLoading: false,
    };
  case COCKTAILS_BY_INGRIDIENTS_ACTIONS.GET_COCKTAILS_INGRIDIENTS_REQUEST:
    return{
      ...state,
      isListLoading: true
    };
  case COCKTAILS_BY_INGRIDIENTS_ACTIONS.GET_COCKTAILS_INGRIDIENTS_SUCCESS:
    return{
      ...state,
      cocktailsByIngridient: action.payload.drinks,
      isListLoading: false,
    };
  case COCKTAILS_BY_INGRIDIENTS_ACTIONS.GET_COCKTAILS_INGRIDIENTS_FAILED:
    return{
      ...state,
      isListLoading: false,
    };
  case GET_ITEM.GET_ITEM_NAME:
    return{
      ...state,
      itemName: action.payload
    }
  default:
    return {
      ...state 
    };
  }
 
};