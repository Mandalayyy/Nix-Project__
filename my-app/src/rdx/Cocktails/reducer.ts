import {cocktailsIngridientsModel, cocktailsModel} from '../../services/models';
import {cocktailsActions, COCKTAILS_ACTIONS, COCKTAILS_INGRIDIENT_ACTIONS} from './actions';


export interface CocktailsState   {
   list: Array<cocktailsModel>;
   isListLoading: boolean;
   ingridientsList: Array<cocktailsModel>; 
}




const initialState: CocktailsState = {
  list: [],
  isListLoading: false,
  ingridientsList: [],
};

export const reducer = (state: CocktailsState = initialState, action: cocktailsActions ) => {
  switch(action.type){
  case COCKTAILS_ACTIONS.GET_COCKTAILS_REQUEST:
    return{
      ...state,
      isListLoading: true,
    };
  case COCKTAILS_ACTIONS.GET_COCKTAILS_SUCCESS:
    return{
      
      ...state,
      list: action.payload.drinks,
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
  default:
    return {
      ...state 
    };
  }
 
};