import { ADD_SEARCH_TO_HISTORY } from '../actions/actionTypes';

// initial state of the application
const initState = {
	searchHistory: []
};

const appReducer = (state = initState, action) => {
	switch (action.type) {
		case ADD_SEARCH_TO_HISTORY: {
			return {
				...state,
				searchHistory: [ ...state.searchHistory, action.payload ]
			};
		}

		default:
			return state;
	}
};

export default appReducer;
