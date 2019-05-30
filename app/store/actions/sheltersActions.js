import { ADD_SEARCH_TO_HISTORY, SET_CLOSEST_SHELTER } from './actionTypes';

export const addSearchToHistoryAction = (searchResult) => {
	return {
		type: ADD_SEARCH_TO_HISTORY,
		payload: searchResult
	};
};

export const setClosestShelterAction = (shelter) => {
	return {
		type: SET_CLOSEST_SHELTER,
		payload: shelter
	};
};
