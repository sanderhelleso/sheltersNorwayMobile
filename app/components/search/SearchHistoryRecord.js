import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

import formatTime from '../../lib/formatTime';

const SearchHistoryRecord = ({ record }) => {
	const { keywords, result, time } = record;
	return (
		<StyledView>
			<StyledKeywords>{keywords}</StyledKeywords>
			<StyledTime>{formatTime(time)}</StyledTime>
		</StyledView>
	);
};

export default SearchHistoryRecord;

const StyledView = styled.View`
	padding: 5px 0;
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
	font-size: 14px;
	color: #9e9e9e;
	font-weight: 100;
	position: absolute;
	right: 0;
`;
