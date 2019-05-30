export default (str) => {
	if (!str) return '';

	const lcArr = str.toLowerCase().split('');
	return `${lcArr[0].toUpperCase()}${lcArr.slice(1, lcArr.length).join('')}`;
};
