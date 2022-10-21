import {cocktailsSearchResponse} from '../services/models';
import {cocktailsActions, COCKTAILS_ACTIONS} from './actions';


export interface CocktailsState  {
   list: Array<cocktailsSearchResponse>;
   isListLoading: boolean;
}



const initialState: CocktailsState = {
  list: [],
  isListLoading: false,
};

export const reducer = (state: CocktailsState = initialState, action: cocktailsActions  ) => {
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
  default:
    return {
      ...state 
    };
  }
 
};