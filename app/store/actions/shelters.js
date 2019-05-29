import { ADD_SEARCH_TO_HISTORY } from './actionTypes';

export const addSearchToHistoryAction = (searchResult) => {
	return {
		type: ADD_SEARCH_TO_HISTORY,
		payload: searchResult
	};
};
