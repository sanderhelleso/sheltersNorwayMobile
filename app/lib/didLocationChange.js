export default (currCoords, oldCoords) => {
	return currCoords.latitude !== oldCoords.latitude || currCoords.longitude !== oldCoords.longitude;
};
