import {  combineReducers, configureStore, Store } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import thunk from 'redux-thunk';
import { cocktailsActions } from '../rdx/Cocktails/actions';
import {CocktailsState, reducer as cocktailsReducer} from './Cocktails/reducer';
import {OwnCocktailsState, reducer as ownCocktailsReducer} from './OwnCocktails/reducer';

export interface RootState {
  cocktails: CocktailsState;
  ownCocktails:  OwnCocktailsState
}

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: hardSet,
};

const rootReducer = combineReducers({
  cocktails:  cocktailsReducer,
  ownCocktails: ownCocktailsReducer,
});

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store: Store<RootState, cocktailsActions> = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});


export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
