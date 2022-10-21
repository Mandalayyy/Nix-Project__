import { createStore,combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import {CocktailsState, reducer as cocktailsReducer} from './reducer';

export interface RootState {
  cocktails: CocktailsState;
}

const rootReducer = combineReducers({
  cocktails: cocktailsReducer
});

  

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch