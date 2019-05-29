import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styled from 'styled-components';

class SearchBtn extends Component {
	render() {
		return (
			<StyledBtnCont>
				<StyledButton>
					<StyledText>SØK</StyledText>
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
	border-radius: 4px;
	border: 1px solid #ffffff;
	background-color: #f50057;
`;

const StyledText = styled.Text`
	color: #ffffff;
	letter-spacing: 1px;
`;
