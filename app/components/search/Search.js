import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

import SearchField from './SearchField';
import SearchBtn from './SearchBtn';

class Search extends Component {
	render() {
		return (
			<StyledView>
				<SearchField />
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
