import React from 'react';
import styled from 'styled-components';

import SearchResultListRow from './SearchResultListRow';

const SearchResultList = ({ result }) => {
	const renderList = () => {
		return result.map((shelter, i) => {
			return <SearchResultListRow key={i} info={shelter} />;
		});
	};

	return (
		<StyledListCont style={topBorder} showsVerticalScrollIndicator={false}>
			{renderList()}
		</StyledListCont>
	);
};

export default SearchResultList;

const StyledListCont = styled.ScrollView`
	margin: 15px 0;
	padding: 20px 0;
	min-height: 100%;
`;

const topBorder = {
	borderTopWidth: 1,
	borderTopColor: '#eeeeee'
};
