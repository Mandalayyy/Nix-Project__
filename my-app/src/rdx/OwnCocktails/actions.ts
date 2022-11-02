import { createAction } from 'typesafe-actions';
import { cocktailIngridientSearch } from '../../services/models';
import { CREATE_OWN_COCKTAIL, EDIT_OWN_COCKTAIL, GET_ITEM_ID, REMOVE_OWN_COCKTAIL } from './actions-type';


export const createOwnCocktail = createAction(CREATE_OWN_COCKTAIL)<cocktailIngridientSearch>();
export const removeOwnCocktail = createAction(REMOVE_OWN_COCKTAIL)<string>();
export const editOwnCocktail = createAction(EDIT_OWN_COCKTAIL)<cocktailIngridientSearch>();
export const getItemId = createAction(GET_ITEM_ID)<string | null>();
