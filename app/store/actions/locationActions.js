import { UPDATE_CLIENT_LOCATION } from './actionTypes';

export const updateCLientLocationAction = (location) => {
	return {
		type: UPDATE_CLIENT_LOCATION,
		payload: location
	};
};
