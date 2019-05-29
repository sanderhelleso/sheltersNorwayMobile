import React from 'react';
import { Dimensions } from 'react-native';
import Landing from '../components/home/Landing';
import ImageOverlay from 'react-native-image-overlay';

// cover picture
const cover = require('../assets/cover.jpg');

const HomeScreen = () => {
	return (
		<ImageOverlay source={cover} height={Dimensions.get('window').height} contentPosition="top" overlayAlpha={0.7}>
			<Landing />
		</ImageOverlay>
	);
};

export default HomeScreen;
