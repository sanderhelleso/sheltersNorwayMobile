import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import sheltersReducer from './reducers/sheltersReducer';
import searchReducer from './reducers/searchReducer';
import closestReducer from './reducers/closestReducer';

const rootReducer = combineReducers({
	shelters: sheltersReducer,
	search: searchReducer,
	closest: closestReducer
});

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [ 'shelters' ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
