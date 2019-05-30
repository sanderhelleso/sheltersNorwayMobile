import shelters from '../../dataset/shelters';

// load up shelter dataset on app load
const initState = shelters;

const sheltersReducer = (state = initState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default sheltersReducer;
