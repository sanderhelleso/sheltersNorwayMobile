import { UPDATE_CLIENT_LOCATION } from '../actions/actionTypes';

const initState = {
	coords: {
		latitude: null,
		longitude: null,
		accuracy: null,
		timestamp: false
	},

	shelter: {
		found: false
	}
};

const locationReducer = (state = initState, action) => {
	switch (action.type) {
		case UPDATE_CLIENT_LOCATION: {
			return {
				...state,
				coords: action.payload
			};
		}

		default:
			return state;
	}
};

export default locationReducer;
