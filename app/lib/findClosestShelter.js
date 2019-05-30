// finds the closest shelter from the given client coordinates
export default (latitude, longitude, shelters) => {
	let mindif = 99999;
	let closestShelter;

	// iterate over shelters and find closest using the PythagorasEquirectangular formula
	for (shelter of shelters.features) {
		let coords = shelter.geometry.coordinates;
		const dif = PythagorasEquirectangular(latitude, longitude, coords[1], coords[0]);
		if (dif < mindif) {
			closestShelter = shelter;
			mindif = dif;
		}
	}

	// return the clostst shelter found from the users location
	return closestShelter;
};

// convert degress to radians
function Deg2Rad(deg) {
	return deg * Math.PI / 180;
}

// compare difference in distance as bird-flight from two coordinate points to anoher
function PythagorasEquirectangular(lat1, lon1, lat2, lon2) {
	lat1 = Deg2Rad(lat1);
	lat2 = Deg2Rad(lat2);
	lon1 = Deg2Rad(lon1);
	lon2 = Deg2Rad(lon2);
	const R = 6371; // km
	const x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
	const y = lat2 - lat1;
	const d = Math.sqrt(x * x + y * y) * R;
	return d;
}
