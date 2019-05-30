import React from 'react';
import styled from 'styled-components';

import capitalizeString from '../../lib/capitalizeString';

const ShelterInfo = ({ info }) => {
	const { adresse, kommune, distriktsnavn } = info;

	const buildDescription = () => {
		return `${adresse}, ${capitalizeString(kommune)}`;
	};

	return (
		<StyledView>
			<StyledHeading>INFORMASJON</StyledHeading>
			<StyledDescription>{buildDescription()}</StyledDescription>
			<StyledListCont style={bottomBorder} />
		</StyledView>
	);
};

const StyledView = styled.View`
	flex: 1;
	padding: 40px 30px;
`;

const StyledHeading = styled.Text`
	font-size: 30;
	font-weight: 600;
	letter-spacing: 2px;
`;

const StyledDescription = styled.Text`
	font-size: 14;
	font-weight: 100;
	color: #9e9e9e;
	text-transform: capitalize;
	margin-top: 7.5px;
`;

const StyledListCont = styled.View`
	margin-top: 10px;
	padding-top: 20px;
`;

const bottomBorder = {
	borderBottomWidth: 1,
	borderBottomColor: '#eeeeee'
};

export default ShelterInfo;
