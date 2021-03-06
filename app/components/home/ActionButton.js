import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';

const ActionButton = ({ text, icon, onPress }) => {
	return (
		<TouchableOpacity style={{ height: 100 }} onPress={onPress}>
			<StyledIconCont>
				<Ionicons name={icon} size={20} color="white" />
			</StyledIconCont>
			<StyledText>{text}</StyledText>
		</TouchableOpacity>
	);
};

export default ActionButton;

const StyledText = styled.Text`
	color: #ffffff;
	text-align: center;
	margin-top: 12.5px;
	letter-spacing: 1px;
`;

const StyledIconCont = styled.View`
	position: absolute;
	left: 15px;
	top: 13.5;
`;
