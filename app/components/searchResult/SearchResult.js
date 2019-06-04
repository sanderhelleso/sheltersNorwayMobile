import React from 'react';
import styled from 'styled-components';

import SearchResultList from './SearchResultList';

const SearchResult = ({ result, keywords }) => {
	return (
		<StyledView>
			<StyledResultCount adjustsFontSizeToFit>{result.length}</StyledResultCount>
			<StyledKeywords>
				tilfluktsrom funnet for <StyledKeywordsStrong>{keywords}</StyledKeywordsStrong>
			</StyledKeywords>
			<SearchResultList result={result} />
		</StyledView>
	);
};

export default SearchResult;

const StyledView = styled.View`
	flex: 1;
	padding: 20px 30px;
`;

const StyledKeywords = styled.Text`
	color: #9e9e9e;
	font-size: 16px;
	margin: 5px 0;
`;

const StyledKeywordsStrong = styled.Text`
	color: #9e9e9e;
	font-size: 18px;
	font-weight: 600;
`;

const StyledResultCount = styled.Text`
	font-size: 50;
	font-weight: 800;
`;
