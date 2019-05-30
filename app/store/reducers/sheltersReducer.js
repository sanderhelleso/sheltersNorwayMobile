import shelters from '../../dataset/shelters';

const initState = shelters;

const sheltersReducer = (state = initState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default sheltersReducer;
