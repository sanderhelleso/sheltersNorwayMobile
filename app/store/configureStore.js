import { createStore, combineReducers } from 'redux';
import devTools from 'remote-redux-devtools-sp';

import appReducer from './reducers/appReducer';

const rootReducer = combineReducers({
	app: appReducer
});

const configureStore = () => createStore(rootReducer, devTools());

export default configureStore;
