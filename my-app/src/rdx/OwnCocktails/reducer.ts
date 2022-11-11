import * as Actions from './actions';
import { cocktailIngridientSearch } from "../../services/models";
import { ActionType, getType } from "typesafe-actions";



export type OwnCocktailsActions = ActionType<typeof Actions>;

export interface OwnCocktailsState   {
 data: Array<cocktailIngridientSearch>
 itemId?: string | null,
}

const initialState: OwnCocktailsState = {
  data: [],
  itemId: null,
};

export const reducer = (state: OwnCocktailsState = initialState, action: OwnCocktailsActions ) => {
  switch(action.type){
  case getType(Actions.createOwnCocktail):{
    return{
      ...state,
      data: [...state.data, action.payload]
    };
  }
  case getType(Actions.removeOwnCocktail):{
    return{
      ...state,
      data: state.data.filter((e) => e.idDrink !== action.payload)
    };
  }
  case getType(Actions.editOwnCocktail):{
    return{
      ...state,
      data: state.data.map((element) => {
        if(element.idDrink === action.payload.idDrink){
          return action.payload;
        }
        return element;
        
      })
    };
  }
  case getType(Actions.getItemId):{
    return{
      ...state,
      itemId: action.payload
    };
  }
  default:
    return {
      ...state 
    };
  }
 
};