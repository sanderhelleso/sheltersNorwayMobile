import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './app/screens/HomeScreen';
import ShelterMapScreen from './app/screens/ShelterMapScreen'

import globalStyles from './app/globalStyles';
globalStyles();

const AppNavigator = createStackNavigator({
	Home: { 
		screen: HomeScreen,
		navigationOptions: {
			header: null,
		}
	},
	ShelterMap: { 
		screen: ShelterMapScreen,
		navigationOptions: {
			title: 'NORGESKART'
		}
	},
}, {
	defaultNavigationOptions: {
		headerTintColor: '#ffffff',
		headerStyle: {
			backgroundColor: '#f50057',
		},
		headerTitleStyle: {
			color: '#ffffff',
			letterSpacing: 1,
			textAlign: 'right', 
			flex: 1 
		}, 
	}
});

export default createAppContainer(AppNavigator);
