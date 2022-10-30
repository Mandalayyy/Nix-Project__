import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import {CocktailsState, reducer as cocktailsReducer} from './reducer';

export interface RootState {
  cocktails: CocktailsState;
}

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  cocktails: cocktailsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});


export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;