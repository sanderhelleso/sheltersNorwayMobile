import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styled from 'styled-components';

class SearchBtn extends Component {
	iconPrefix = Platform.OS === 'ios' ? 'ios' : 'md';

	render() {
		return (
			<StyledBtnCont>
				<StyledButton>
					<StyledIconCont>
						<Ionicons name={`${this.iconPrefix}-send`} size={20} color="white" />
					</StyledIconCont>
					<StyledText>SØK</StyledText>
				</StyledButton>
			</StyledBtnCont>
		);
	}
}

export default SearchBtn;

const StyledButton = styled.TouchableOpacity`
	min-width: 60%;
	min-height: 55px;
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

const StyledIconCont = styled.View`
	position: absolute;
	right: 16px;
	top: 18px;
	opacity: 0.6;
`;
