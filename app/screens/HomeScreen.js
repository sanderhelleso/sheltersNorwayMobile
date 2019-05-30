import React from 'react';
import { Dimensions } from 'react-native';
import Landing from '../components/home/Landing';
import Bg from '../components/sharable/Bg';

// cover picture
const cover = require('../assets/cover.jpg');

const HomeScreen = () => {
	return <Bg source={cover} child={<Landing />} overlayStrength={0.7} />;
};

export default HomeScreen;
