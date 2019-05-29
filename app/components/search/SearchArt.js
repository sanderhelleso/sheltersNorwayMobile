import React from 'react';
import styled from 'styled-components';

const source = require('../../assets/search2.png');

const SearchArt = () => {
	return <StyledImage source={source} />;
};

export default SearchArt;

const StyledImage = styled.Image`
	height: 140px;
	width: 140px;
`;
