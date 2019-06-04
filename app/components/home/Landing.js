import React, { Fragment } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import navigationService from '../../navigationService.js';

import ActionsGroup from './ActionsGroup';

const Landing = () => {
	const staticText = {
		subHeading1: 'Offentlige',
		subHeading2: 'Tilfluktsrom',
		mainHeading: 'Norge',
		slogan: 'Vær Bevisst, Vær Trygg'
	};

	return (
		<Fragment>
			<StyledView>
				<StyledSubHeading adjustsFontSizeToFit>{staticText.subHeading1.toUpperCase()}</StyledSubHeading>
				<StyledSubHeading adjustsFontSizeToFit>{staticText.subHeading2.toUpperCase()}</StyledSubHeading>
				<StyledMainHeading adjustsFontSizeToFit>{staticText.mainHeading.toUpperCase()}</StyledMainHeading>
				<StyledBorder />
				<StyledSlogan>{staticText.slogan.toUpperCase()}</StyledSlogan>
			</StyledView>
			<ActionsGroup />
			<StyledAbout>
				<TouchableOpacity onPress={() => navigationService.navigate('AboutApp', {})}>
					<Text style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Om denne applikasjonen</Text>
				</TouchableOpacity>
			</StyledAbout>
		</Fragment>
	);
};

export default Landing;

const StyledView = styled.View`
	flex: 1;
	justify-content: flex-end;
	align-items: center;
	text-align: center;
	margin: 10px 0;
`;

const StyledSubHeading = styled.Text`
	font-size: 20;
	color: #ffffff;
	text-transform: uppercase;
	letter-spacing: 4px;
	font-weight: 600;
`;

const StyledMainHeading = styled.Text`
	font-size: 60;
	color: #f50057;
	text-transform: uppercase;
	letter-spacing: 9px;
	font-weight: 800;
	line-height: 70px;
`;

const StyledSlogan = styled.Text`
	font-size: 14;
	color: #ffffff;
	font-weight: 100;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-weight: 100;
`;

const StyledBorder = styled.View`
	max-width: 80px;
	min-width: 80px;
	min-height: 3px;
	background-color: #ffffff;
	margin: 15px auto;
`;

const StyledAbout = styled.View`
	flex: 0.3;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
