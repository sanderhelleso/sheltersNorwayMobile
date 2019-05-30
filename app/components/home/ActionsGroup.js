import React from 'react';
import styled from 'styled-components';
import { Platform } from 'react-native';

import ActionButton from './ActionButton';

import navigationService from '../../navigationService.js';

const ActionsGroup = () => {
	const iconPrefix = Platform.OS === 'ios' ? 'ios' : 'md';

	// list of available actions presented to user
	// Find closest, search and see map
	const actions = [
		{
			text: 'NÆRMEST MEG',
			icon: `${iconPrefix}-pin`,
			onPress: () => navigationService.navigate('ClosestShelter', {})
		},
		{
			text: 'SØK',
			icon: `${iconPrefix}-search`,
			onPress: () => navigationService.navigate('Search', {})
		},
		{
			text: 'NORGESKART',
			icon: `${iconPrefix}-map`,
			onPress: () => navigationService.navigate('ShelterMap', {})
		}
	];

	const renderActions = () => {
		return actions.map((action, i) => (
			<StyledBtnCont key={i}>
				<ActionButton {...action} />
			</StyledBtnCont>
		));
	};

	return <StyledView>{renderActions()}</StyledView>;
};

export default ActionsGroup;

const StyledView = styled.View`
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const StyledBtnCont = styled.View`
	width: 65%;
	height: 50px;
	margin: 15px;
	border-radius: 4px;
	border: 1px solid #ffffff;
	background-color: rgba(20, 20, 20, 0.2);
`;
