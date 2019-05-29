import React, { Component } from 'react';
import styled from 'styled-components';

import SearchField from './SearchField';
import SearchBtn from './SearchBtn';
import SearchArt from './SearchArt';

class Search extends Component {
	render() {
		return (
			<StyledView>
				<SearchField />
				<StyledSeperator />
				<SearchBtn />
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

const StyledSeperator = styled.View`
	min-height: 85px;
	min-width: 1.5px;
	background-color: #ffffff;
	opacity: 0.3;
	margin: 50px auto;
`;
