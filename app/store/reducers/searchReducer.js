import { ADD_SEARCH_TO_HISTORY } from '../actions/actionTypes';

const initState = {
	searchHistory: []
};

const searchReducer = (state = initState, action) => {
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

export default searchReducer;
