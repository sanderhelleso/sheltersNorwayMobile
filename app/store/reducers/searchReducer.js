import { ADD_SEARCH_TO_HISTORY } from '../actions/actionTypes';
import historyQueue from '../../lib/historyQueue';

const initState = {
	searchHistory: []
};

const searchReducer = (state = initState, action) => {
	switch (action.type) {
		case ADD_SEARCH_TO_HISTORY: {
			return {
				...state,
				searchHistory: historyQueue(state.searchHistory, action.payload)
			};
		}

		default:
			return state;
	}
};

export default searchReducer;
