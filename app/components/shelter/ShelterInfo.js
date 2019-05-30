import React from 'react';
import styled from 'styled-components';

import capitalizeString from '../../lib/capitalizeString';

import ShelterInfoList from './ShelterInfoList';

const ShelterInfo = ({ info }) => {
	const { adresse, kommune, distriktsnavn } = info;

	const buildDescription = () => {
		return `${adresse}, ${capitalizeString(kommune)}`;
	};

	return (
		<StyledView>
			<StyledHeading>INFORMASJON</StyledHeading>
			<StyledDescription>{buildDescription()}</StyledDescription>
			<StyledListCont style={topBorder} showsVerticalScrollIndicator={false}>
				<ShelterInfoList info={info} />
			</StyledListCont>
		</StyledView>
	);
};

const StyledView = styled.View`
	flex: 1;
	padding: 20px 30px;
`;

const StyledHeading = styled.Text`
	font-size: 28;
	font-weight: 600;
	letter-spacing: 2px;
`;

const StyledDescription = styled.Text`
	font-size: 14;
	color: #9e9e9e;
	text-transform: capitalize;
	margin-top: 7.5px;
`;

const StyledListCont = styled.ScrollView`
	margin: 15px 0;
	padding: 20px 0;
	min-height: 100%;
`;

const topBorder = {
	borderTopWidth: 1,
	borderTopColor: '#eeeeee'
};

export default ShelterInfo;
