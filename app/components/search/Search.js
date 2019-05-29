import React, { Component } from 'react';
import styled from 'styled-components';

import SearchField from './SearchField';
import SearchBtn from './SearchBtn';
import SearchHistory from './SearchHistory';

class Search extends Component {
	render() {
		return (
			<StyledView>
				<SearchHistory />
				<StyledSearchCont>
					<SearchField />
					<StyledSeperator />
					<SearchBtn />
				</StyledSearchCont>
			</StyledView>
		);
	}
}

export default Search;

const StyledView = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const StyledSearchCont = styled.View`flex: 3;`;

const StyledSeperator = styled.View`
	min-height: 100px;
	min-width: 1.5px;
	background-color: #eeeeee;
	margin: 25px auto;
`;
