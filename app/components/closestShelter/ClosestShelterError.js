import React from 'react';
import styled from 'styled-components';

import Button from '../sharable/Button';

const ClosestShelterError = ({ retry, message }) => {
	return (
		<StyledView>
			<StyledView>
				<StyledHeading>Noe gikk galt...</StyledHeading>
				<StyledText>{message}</StyledText>
			</StyledView>
			<StyledView>
				<Button text="PRØV IGJEN" icon="refresh" onPress={() => retry()} />
			</StyledView>
		</StyledView>
	);
};

const StyledView = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const StyledHeading = styled.Text`
	font-size: 26px;
	letter-spacing: 1px;
	font-weight: 600;
	text-align: center;
`;

const StyledText = styled.Text`
	font-size: 16px;
	color: #9e9e9e;
	margin-top: 15px;
	max-width: 75%;
	text-align: center;
`;

export default ClosestShelterError;
