import { createAsyncAction, createAction } from 'typesafe-actions';
import {cocktailsResponse,cocktailsIngridientsResponse, cocktailIngridientSearchList} from '../../services/models';
import { ActionType } from 'typesafe-actions';

interface CocktailsError {
    error: string
}


export enum GET_ITEM{
  GET_ITEM_NAME = '@/cocktails/GET_ITEM_NAME'
}

export const getItemName = createAction(GET_ITEM.GET_ITEM_NAME)<string | null>();

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

export enum INGRIDIENTS_ACTIONS{
  GET_INGRIDIENTS_REQUEST = '@cocktails/GET_INGRIDIENTS_REQUEST',
  GET_INGRIDIENTS_SUCCESS = '@cocktails/GET_INGRIDIENTS_SUCCESS',
  GET_INGRIDIENTS_FAILED = '@cocktails/GET_INGRIDIENTS_FAILED',
}

export enum COCKTAILS_BY_INGRIDIENTS_ACTIONS{
  GET_COCKTAILS_INGRIDIENTS_REQUEST = '@cocktails/GET_COCKTAILS_INGRIDIENTS_REQUEST',
  GET_COCKTAILS_INGRIDIENTS_SUCCESS = '@cocktails/GET_COCKTAILS_INGRIDIENTS_SUCCESS',
  GET_COCKTAILS_INGRIDIENTS_FAILED = '@cocktails/GET_COCKTAILS_INGRIDIENTS_FAILED',
}

export const getCocktailsByIngridient = createAsyncAction(
  COCKTAILS_BY_INGRIDIENTS_ACTIONS.GET_COCKTAILS_INGRIDIENTS_REQUEST,
  COCKTAILS_BY_INGRIDIENTS_ACTIONS.GET_COCKTAILS_INGRIDIENTS_SUCCESS,
  COCKTAILS_BY_INGRIDIENTS_ACTIONS.GET_COCKTAILS_INGRIDIENTS_FAILED
)<undefined, cocktailsResponse, CocktailsError>();

export const getCocktailsASYNCActions = createAsyncAction(
  COCKTAILS_ACTIONS.GET_COCKTAILS_REQUEST,
  COCKTAILS_ACTIONS.GET_COCKTAILS_SUCCESS,
  COCKTAILS_ACTIONS.GET_COCKTAILS_FAILED,

)<undefined, cocktailsResponse, CocktailsError>();

export const getCocktailsIngridientAsyncActions = createAsyncAction(
  COCKTAILS_INGRIDIENT_ACTIONS.GET_COCKTAILS_INGRIDIENT_REQUEST,
  COCKTAILS_INGRIDIENT_ACTIONS.GET_COCKTAILS_INGRIDIENT_SUCCESS,
  COCKTAILS_INGRIDIENT_ACTIONS.GET_COCKTAILS_INGRIDIENT_FAILED,
)<undefined, cocktailsIngridientsResponse, CocktailsError>();

export const getIngredientsList = createAsyncAction(
  INGRIDIENTS_ACTIONS.GET_INGRIDIENTS_REQUEST,
  INGRIDIENTS_ACTIONS.GET_INGRIDIENTS_SUCCESS,
  INGRIDIENTS_ACTIONS.GET_INGRIDIENTS_FAILED,
)<undefined, cocktailIngridientSearchList, CocktailsError>();

const AllActions = {
  getCocktailsASYNCActions,
  getCocktailsIngridientAsyncActions,
  getIngredientsList,
  getCocktailsByIngridient,
  getItemName,
};

export type cocktailsActions = ActionType<typeof AllActions >;



