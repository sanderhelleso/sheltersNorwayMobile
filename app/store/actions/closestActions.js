import { UPDATE_CLIENT_LOCATION, SET_CLOSEST_SHELTER } from './actionTypes';

export const updateCLientLocationAction = (location) => {
	return {
		type: UPDATE_CLIENT_LOCATION,
		payload: location
	};
};

export const setClosestShelterAction = (shelter) => {
	return {
		type: SET_CLOSEST_SHELTER,
		payload: shelter
	};
};
