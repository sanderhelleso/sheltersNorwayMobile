import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';
import iconPrefix from '../../lib/iconPrefix';

const Button = ({ text, icon, onPress, disabled }) => {
	const renderIcon = () => {
		if (icon) {
			return <Ionicons name={`${iconPrefix}-${icon}`} size={20} color="white" />;
		}

		return null;
	};

	return (
		<StyledBtnCont>
			<StyledButton onPress={onPress} disabled={disabled}>
				<StyledIconCont>{renderIcon()}</StyledIconCont>
				<StyledText>{text}</StyledText>
			</StyledButton>
		</StyledBtnCont>
	);
};

export default Button;

const StyledButton = styled.TouchableOpacity`
	min-height: 55px;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const StyledBtnCont = styled.View`
	border-radius: 4px;
	border: 1px solid #ffffff;
	background-color: #f50057;
	min-width: 75%;
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
