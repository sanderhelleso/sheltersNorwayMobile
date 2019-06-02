// returs a unique list of shelters that passed the comparator check
export default (shelters, keywords) => {
	const includes = {};
	return shelters.features.filter((shelter) => {
		if (includes.hasOwnProperty(shelter.properties.adresse)) return;
		includes[shelter.properties.adresse] = true;
		return shouldInclude(shelter, keywords);
	});
};

// returns a bool depending if a shelter contains the releated
// keywords in any of its searchable fields
function shouldInclude(shelter, keywords) {
	const { adresse, kommune, distriktsnavn } = shelter.properties;
	const kwRegex = new RegExp(`${keywords}`, 'i');

	return kwRegex.test(adresse) || kwRegex.test(kommune) || kwRegex.test(distriktsnavn);
}
