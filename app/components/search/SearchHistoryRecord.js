import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

import formatTime from '../../lib/formatTime';

const SearchHistoryRecord = ({ record }) => {
	const { keywords, result, time } = record;
	return <Text>{keywords}</Text>;
};

export default SearchHistoryRecord;
