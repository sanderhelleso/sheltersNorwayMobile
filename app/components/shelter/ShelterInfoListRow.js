import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import capitalizeString from '../../lib/capitalizeString';

const ShelterInfoListRow = ({ field, value, icon, last }) => {
	return (
		<StyledView last={last} style={last ? null : bottomBorder}>
			<View>
				<Ionicons name={icon} size={28} color="#f50057" />
				<StyledField>{field.toUpperCase()}</StyledField>
			</View>
			<StyledValue>{value ? value : 'UKJENT'}</StyledValue>
		</StyledView>
	);
};

const StyledView = styled.View`
	padding: 20px 0px;
	padding-bottom: ${(props) => (props.last ? 165 : 20)}px;
`;

const StyledField = styled.Text`
	font-size: 18px;
	margin-bottom: 5px;
	letter-spacing: 1px;
	font-weight: 800;
`;

const StyledValue = styled.Text`
	font-size: 14px;
	color: #9e9e9e;
	opacity: 0.7;
`;

const bottomBorder = {
	borderBottomWidth: 0.5,
	borderBottomColor: '#eeeeee'
};

export default ShelterInfoListRow;
