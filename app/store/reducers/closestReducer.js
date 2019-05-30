const initState = {
	clientCoords: {
		latitude: null,
		longitude: null,
		signal: null,
		fetched: false,
		lastFetched: null
	},

	shelter: {
		found: false
	}
};

const locationReducer = (state = initState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default locationReducer;
