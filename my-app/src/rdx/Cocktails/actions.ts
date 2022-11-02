import { createAsyncAction } from 'typesafe-actions';
import {cocktailsResponse} from '../../services/models';
import { ActionType } from 'typesafe-actions';

interface CocktailsError {
    error: string
}



export enum COCKTAILS_ACTIONS {
    GET_COCKTAILS_REQUEST = '@cocktails/GET_COCKTAILS_REQUEST',
    GET_COCKTAILS_SUCCESS = '@cocktails/GET_COCKTAILS_SUCCESS',
    GET_COCKTAILS_FAILED = '@cocktails/GET_COCKTAILS_FAILED',

}

export enum COCKTAILS_INGRIDIENT_ACTIONS{
  GET_COCKTAILS_INGRIDIENT_REQUEST = '@cocktails/GET_COCKTAILS_INGRIDIENT_REQUEST',
  GET_COCKTAILS_INGRIDIENT_SUCCESS = '@cocktails/GET_COCKTAILS_INGRIDIENT_SUCCESS',
  GET_COCKTAILS_INGRIDIENT_FAILED = '@cocktails/GET_COCKTAILS_INGRIDIENT_FAILED',
}

export const getCocktailsASYNCActions = createAsyncAction(
  COCKTAILS_ACTIONS.GET_COCKTAILS_REQUEST,
  COCKTAILS_ACTIONS.GET_COCKTAILS_SUCCESS,
  COCKTAILS_ACTIONS.GET_COCKTAILS_FAILED,

)<undefined, cocktailsResponse, CocktailsError>();

export const getCocktailsIngridientAsyncActions = createAsyncAction(
  COCKTAILS_INGRIDIENT_ACTIONS.GET_COCKTAILS_INGRIDIENT_REQUEST,
  COCKTAILS_INGRIDIENT_ACTIONS.GET_COCKTAILS_INGRIDIENT_SUCCESS,
  COCKTAILS_INGRIDIENT_ACTIONS.GET_COCKTAILS_INGRIDIENT_FAILED,
)<undefined, cocktailsResponse, CocktailsError>();

const AllActions = {
  getCocktailsASYNCActions,
  getCocktailsIngridientAsyncActions,
};


export type cocktailsActions = ActionType<typeof AllActions >;
