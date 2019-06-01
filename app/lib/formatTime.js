// convert a timestamp to date
export function tsToDate(timestamp) {
	return new Date(timestamp).toDateString();
}

// convert a timestamp to HH:MM
export function tsToHHMM(timestamp) {
	const date = new Date(timestamp);
	return `${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;
}

export default (timestamp) => {
	return `${tsToDate(timestamp)} ${tsToHHMM(timestamp)}`;
};
