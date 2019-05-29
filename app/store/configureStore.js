import { createStore, combineReducers } from 'redux';

import sheltersReducer from './reducers/sheltersReducer';
import searchReducer from './reducers/searchReducer';
import locationReducer from './reducers/locationReducer';

const rootReducer = combineReducers({
	shelters: sheltersReducer,
	searchReducer: searchReducer,
	locationReducer: locationReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
