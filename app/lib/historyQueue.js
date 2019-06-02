const LIMIT = 3;

// returns a new history queue, removes from front if above limit
export default (history, data) => {
	const h = history;
	if (h.length + 1 > LIMIT) {
		h.pop();
	}

	return [ data, ...h ];
};
