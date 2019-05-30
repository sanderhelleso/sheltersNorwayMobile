// compare two location objects (new, old) and returns condition
export default (currCoords, oldCoords) => {
	return currCoords.latitude !== oldCoords.latitude || currCoords.longitude !== oldCoords.longitude;
};
