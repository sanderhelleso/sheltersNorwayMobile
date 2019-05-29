import React from 'react';
import { Dimensions } from 'react-native';
import ImageOverlay from 'react-native-image-overlay';

const Bg = ({ source, child, childPos, overlayStrength }) => {
	return (
		<ImageOverlay
			source={source}
			height={Dimensions.get('window').height}
			contentPosition={childPos}
			overlayAlpha={overlayStrength}
		>
			{child}
		</ImageOverlay>
	);
};

export default Bg;
