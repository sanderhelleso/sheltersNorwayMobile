import React from 'react';
import { Text } from 'react-native';

import Search from '../components/search/Search';

import Bg from '../components/sharable/Bg';

// cover picture
const cover = require('../assets/cover.jpg');

const SearchScreen = () => {
	return <Bg source={cover} child={<Search />} overlayStrength={0.7} />;
};

export default SearchScreen;
