import { createStore, combineReducers } from 'redux';

import sheltersReducer from './reducers/sheltersReducer';
import searchReducer from './reducers/searchReducer';
import closestReducer from './reducers/closestReducer';

const rootReducer = combineReducers({
	shelters: sheltersReducer,
	search: searchReducer,
	closest: closestReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
