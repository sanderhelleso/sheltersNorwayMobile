// returs a bool depending if a shelter contains the releated
// keywords in any of its searchable fields
export default (shelter, keywords) => {
	const { adresse, kommune, distriktsnavn } = shelter.properties;
	const kwRegex = new RegExp(`${keywords}`, 'i');

	return kwRegex.test(adresse) || kwRegex.test(kommune) || kwRegex.test(distriktsnavn);
};
