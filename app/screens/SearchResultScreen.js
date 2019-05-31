import React from 'react';

import SearchResult from '../components/searchResult/SearchResult';

const SearchResultScreen = ({ navigation }) => {
	const { result, keywords } = navigation.state.params;
	return <SearchResult result={result} keywords={keywords} />;
};

export default SearchResultScreen;
