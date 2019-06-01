// depending on passed in value, sort result accordingly
export default (result, value) => {
	const comparator = sortBy(value);
	return result.sort((a, b) => comparator(a, b));
};

// find comparator
function sortBy(value) {
	if (value === 'Adresse A-Z') {
		return byAdresseAsc;
	}

	if (value === 'Adresse Z-A') {
		return byAdresseDsc;
	}

	if (value === 'Kommune A-Z') {
		return byKommuneAsc;
	}

	if (value === 'Kommune Z-A') {
		return byKommuneDsc;
	}

	if (value === 'Distrikt A-Z') {
		return byDistriktAsc;
	}

	if (value === 'Distrikt Z-A') {
		return byDistriktDsc;
	}

	if (value === 'Plasser - Stigende') {
		return byPlasserAsc;
	}

	if (value === 'Plasser - Synkende') {
		return byPlasserDsc;
	}

	if (value === 'Areal - Stigende') {
		return byArealAsc;
	}

	if (value === 'Areal - Synkende') {
		return byArealDsc;
	}

	if (value === 'Byggeår - Stigende') {
		return byByggearAsc;
	}

	if (value === 'Byggeår - Synkende') {
		return byByggearDsc;
	}

	return null;
}

/**
 * Below is implementation of the different 
 * comparator logics for each of the above cases
 */

function byAdresseAsc(a, b) {
	return a.properties.adresse.localeCompare(b.properties.adresse);
}

function byAdresseDsc(a, b) {
	return b.properties.adresse.localeCompare(a.properties.adresse);
}

function byKommuneAsc(a, b) {
	return a.properties.kommune.localeCompare(b.properties.kommune);
}

function byKommuneDsc(a, b) {
	return b.properties.kommune.localeCompare(a.properties.kommune);
}

function byDistriktAsc(a, b) {
	return a.properties.distriktsnavn.localeCompare(b.properties.distriktsnavn);
}

function byDistriktDsc(a, b) {
	return b.properties.distriktsnavn.localeCompare(a.properties.distriktsnavn);
}

function byPlasserAsc(a, b) {
	return a.properties.plasser > b.properties.plasser;
}

function byPlasserDsc(a, b) {
	return a.properties.plasser < b.properties.plasser;
}

function byArealAsc(a, b) {
	return a.properties.areal > b.properties.areal;
}

function byArealDsc(a, b) {
	return a.properties.areal < b.properties.areal;
}

function byByggearAsc(a, b) {
	return a.properties.byggear > b.properties.byggear;
}

function byByggearDsc(a, b) {
	return a.properties.byggear < b.properties.byggear;
}
