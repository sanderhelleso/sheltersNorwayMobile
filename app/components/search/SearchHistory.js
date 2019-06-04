import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import SearchHistoryRecord from './SearchHistoryRecord';

const SearchHistory = ({ searchHistory }) => {
	const renderSearchHistory = () => {
		if (!searchHistory.length) {
			return <StyledPlaceholder>Du har ingen tidligere søk.</StyledPlaceholder>;
		}

		return searchHistory.map((history, i) => {
			return <SearchHistoryRecord key={i} record={history} />;
		});
	};

	return (
		<StyledView style={bottomBorder}>
			<StyledHeading adjustsFontSizeToFit>DIN SØKEHISTORIE</StyledHeading>
			<StyledHistoryView>{renderSearchHistory()}</StyledHistoryView>
		</StyledView>
	);
};

const mapStateToProps = ({ search: { searchHistory } }) => {
	return { searchHistory };
};

export default connect(mapStateToProps, null)(SearchHistory);

const StyledView = styled.View`
	min-width: 100%;
	flex: 2.35;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-bottom: 40px;
`;

const StyledPlaceholder = styled.Text`
	color: #9e9e9e;
	font-size: 14px;
	margin-top: 10px;
`;

const StyledHeading = styled.Text`
	color: #4f4f4f;
	font-size: 26.5;
	font-weight: 800;
	letter-spacing: 2px;
	margin-bottom: 10px;
`;

const StyledHistoryView = styled.View`
	margin-top: 10px;
	padding: 0 30px;
`;

const bottomBorder = {
	borderBottomWidth: 0.5,
	borderBottomColor: '#f5f5f5'
};
