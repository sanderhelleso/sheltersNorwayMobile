import React, { Component } from 'react';
import styled from 'styled-components';

import SearchArt from './SearchArt';

class SearchHistory extends Component {
	state = {
		history: []
	};

	renderHistory() {
		if (!this.state.history.length) {
			return (
				<StyledPlaceholderView>
					<StyledHeading>DIN SØKEHISTORIE</StyledHeading>
					<StyledPlaceholder>Du har ingen tidligere søk.</StyledPlaceholder>
				</StyledPlaceholderView>
			);
		}

		return null;
	}

	render() {
		return <StyledView style={bottomBorder}>{this.renderHistory()}</StyledView>;
	}
}

export default SearchHistory;

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
