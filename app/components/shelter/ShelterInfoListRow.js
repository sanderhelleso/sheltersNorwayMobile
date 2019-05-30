import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

import capitalizeString from '../../lib/capitalizeString';

const ShelterInfoListRow = ({ field, value, last }) => {
	return (
		<StyledView last={last}>
			<StyledField>{captializeString(field)}</StyledField>
			<StyledValue>{value}</StyledValue>
		</StyledView>
	);
};

const StyledView = styled.View`
	padding: 15px 0px;
	padding-bottom: ${(props) => (props.last ? 165 : 15)}px;
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

export default ShelterInfoListRow;
