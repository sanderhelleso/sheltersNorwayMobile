import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import formatTime from '../../lib/formatTime';
import navigationService from '../../navigationService.js';
import { Ionicons } from '@expo/vector-icons';
import iconPrefix from '../../lib/iconPrefix';

const SearchHistoryRecord = ({ record }) => {
	const { keywords, result, time } = record;

	const quickSearch = () => {
		navigationService.navigate('SearchResult', { result, keywords });
	};

	return (
		<StyledView>
			<StyledKeywords onPress={() => quickSearch()}>
				{keywords} <StyledTime>{formatTime(time)}</StyledTime>
			</StyledKeywords>
			<TouchableOpacity style={{ position: 'absolute', right: 0 }} onPress={() => quickSearch()}>
				<Ionicons name={`${iconPrefix}-arrow-forward`} size={30} color="#f50057" />
			</TouchableOpacity>
		</StyledView>
	);
};

export default SearchHistoryRecord;

const StyledView = styled.View`
	padding: 7.5px 0;
	margin: 10px 0;
	position: relative;
	min-width: 100%;
`;

const StyledKeywords = styled.Text`
	font-weight: 600;
	font-size: 16px;
	position: absolute;
	left: 0;
`;

const StyledTime = styled.Text`
	font-size: 12px;
	color: #9e9e9e;
	font-weight: 100;
	text-align: right;
`;

const StyledIcon = styled.Text`
	position: absolute;
	right: 0;
`;
