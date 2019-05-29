import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styled from 'styled-components';

class SearchBtn extends Component {
	render() {
		return (
			<StyledBtnCont>
				<StyledButton>
					<Text>Search</Text>
				</StyledButton>
			</StyledBtnCont>
		);
	}
}

export default SearchBtn;

const StyledButton = styled.TouchableOpacity`
	min-width: 75%;
	min-height: 60px;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const StyledBtnCont = styled.View`
	margin-top: 35px;
	border-radius: 2px;
	border: 1px solid #ffffff;
	background-color: rgba(20, 20, 20, 0.2);
`;
