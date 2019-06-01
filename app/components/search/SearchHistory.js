import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import SearchHistoryRecord from './SearchHistoryRecord';

class SearchHistory extends Component {
	renderSearchHistory() {
		if (!this.props.searchHistory.length) {
			return <StyledPlaceholder>Du har ingen tidligere søk.</StyledPlaceholder>;
		}

		return this.props.searchHistory.map((history, i) => {
			return <SearchHistoryRecord key={i} record={history} />;
		});
	}

	render() {
		return (
			<StyledView style={bottomBorder}>
				<StyledPlaceholderView>
					<StyledHeading>DIN SØKEHISTORIE</StyledHeading>
					{this.renderSearchHistory()}
				</StyledPlaceholderView>
			</StyledView>
		);
	}
}

const mapStateToProps = ({ search: { searchHistory } }) => {
	return { searchHistory };
};

export default connect(mapStateToProps, null)(SearchHistory);

const StyledView = styled.View`
	min-width: 100%;
	flex: 2;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-bottom: 55px;
`;

const StyledPlaceholder = styled.Text`
	color: #9e9e9e;
	font-size: 14px;
	margin-top: 10px;
`;

const StyledHeading = styled.Text`
	color: #4f4f4f;
	font-size: 26.5px;
	font-weight: 800;
	letter-spacing: 2px;
`;

const StyledPlaceholderView = styled.View`
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const bottomBorder = {
	borderBottomWidth: 0.5,
	borderBottomColor: '#f5f5f5'
};
