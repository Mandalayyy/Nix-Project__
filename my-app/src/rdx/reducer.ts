import {cocktailsSearchResponse,cocktailIngridientSearch} from '../services/models';
import {cocktailsActions, COCKTAILS_ACTIONS, COCKTAILS_INGRIDIENT_ACTIONS} from './actions';


export interface CocktailsState  {
   list: Array<cocktailsSearchResponse>;
   isListLoading: boolean;
   ingridientsList: Array<cocktailIngridientSearch>; 
}



const initialState: CocktailsState = {
  list: [],
  isListLoading: false,
  ingridientsList: []
};

export const reducer = (state: CocktailsState = initialState, action: cocktailsActions ) => {
  switch(action.type){
  case COCKTAILS_ACTIONS.GET_COCKTAILS_REQUEST:
    console.log(state,'state');
    console.log(action, 'action');
    return{
      ...state,
      isListLoading: true,
    };
  case COCKTAILS_ACTIONS.GET_COCKTAILS_SUCCESS:
    console.log(action, 'action');
    console.log(state,'state');
    console.log('list', state.list);
    return{
      
      ...state,
      list: action.payload.drinks,
      isListLoading: false,
    };
   
  case COCKTAILS_ACTIONS.GET_COCKTAILS_FAILED:
    console.log(action, 'action');
    return{
      ...state,
      isListLoading: false,
    };
  case COCKTAILS_INGRIDIENT_ACTIONS.GET_COCKTAILS_INGRIDIENT_REQUEST:
    console.log(action, 'action');
    console.log(state,'state');
    return{
      ...state,
      isListLoading: true,
    };
  case COCKTAILS_INGRIDIENT_ACTIONS.GET_COCKTAILS_INGRIDIENT_SUCCESS:
    console.log(action, 'action');
    console.log(state,'state');
    console.log(state.ingridientsList, 's');
    return{
      ...state,
      ingridientsList: action.payload.drinks,
      isListLoading: false,
    };
  case COCKTAILS_INGRIDIENT_ACTIONS.GET_COCKTAILS_INGRIDIENT_FAILED:
    console.log(action, 'action');
    console.log(state,'state');
    return{
      ...state,
      isListLoading: false,
    };
  default:
    return {
      ...state 
    };
  }
 
};