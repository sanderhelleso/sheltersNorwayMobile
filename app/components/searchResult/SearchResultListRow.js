import React from 'react';
import { Text, View, Platform, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import capitalizeString from '../../lib/capitalizeString';
import navigationService from '../../navigationService.js';
import iconPrefix from '../../lib/iconPrefix';

const SearchResultListRow = ({ shelter, last }) => {
	const { properties } = shelter;
	const { adresse, areal, byggear, kommune, distriktsnavn, plasser } = properties;

	const seeMore = () => {
		navigationService.navigate('Shelter', { shelter });
	};

	return (
		<StyledView last={last} style={last ? null : bottomBorder}>
			<StyledHeading>{adresse}</StyledHeading>
			<StyledSubHeading>
				{capitalizeString(kommune)}, {distriktsnavn}
			</StyledSubHeading>
			<StyledDescription>
				Rommer {plasser || 'UKJENT'} plasser og har et areal på {areal || 'UKJENT'} m2
			</StyledDescription>
			<TouchableOpacity onPress={() => seeMore()}>
				<StyledSeeMoreText>SE MER</StyledSeeMoreText>
			</TouchableOpacity>
		</StyledView>
	);
};

export default SearchResultListRow;

const StyledView = styled.View`
	flex: 1;
	margin: 5px 0;
	padding: 10px 0;
	padding-bottom: ${(props) => (props.last ? 230 : 20)}px;
`;

const StyledHeading = styled.Text`
	font-size: 18px;
	font-weight: 600;
	margin-bottom: 2px;
`;

const StyledSubHeading = styled.Text`
	font-size: 16px;
	opacity: 0.7;
	margin-bottom: 5px;
`;

const StyledDescription = styled.Text`
	font-size: 12px;
	color: #9e9e9e;
`;

const StyledSeeMoreText = styled.Text`
	color: #f50057;
	font-weight: 800;
	letter-spacing: 1px;
	margin-top: 15px;
`;

const bottomBorder = {
	borderBottomWidth: 0.5,
	borderBottomColor: '#eeeeee'
};

const shadow = {
	shadowColor: '#000',
	shadowOffset: {
		width: 0,
		height: 2
	},
	shadowOpacity: 0.25,
	shadowRadius: 3.84,

	elevation: 5,
	zIndex: 999
};
