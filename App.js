import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './app/screens/HomeScreen';
import ShelterMapScreen from './app/screens/ShelterMapScreen'

import globalStyles from './app/globalStyles';
globalStyles();

const AppNavigator = createStackNavigator({
	Home: { screen: HomeScreen },
	ShelterMap: { screen: ShelterMapScreen }
});

export default createAppContainer(AppNavigator);
