import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

const SearchHistoryRecord = ({ record }) => {
	const { keywords, result, time } = record;
	return <Text>{keywords}</Text>;
};

export default SearchHistoryRecord;
