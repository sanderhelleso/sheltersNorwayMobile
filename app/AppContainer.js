import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import navigationService from './navigationService';

import HomeScreen from './screens/HomeScreen';
import ClosestShelterScreen from './screens/ClosestShelterScreen';
import SearchScreen from './screens/SearchScreen';
import ShelterMapScreen from './screens/ShelterMapScreen';
import SearchResultScreen from './screens/SearchResultScreen';
import ShelterScreen from './screens/ShelterScreen';

// routes to screens
const TopLevelNavigator = createStackNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				header: null
			}
		},
		ClosestShelter: {
			screen: ClosestShelterScreen,
			navigationOptions: {
				title: 'NÆRMEST MEG'
			}
		},
		Search: {
			screen: SearchScreen,
			navigationOptions: {
				title: 'SØK'
			}
		},
		ShelterMap: {
			screen: ShelterMapScreen,
			navigationOptions: {
				title: 'NORGESKART'
			}
		},
		SearchResult: {
			screen: SearchResultScreen,
			navigationOptions: {
				title: 'SØKERESULTAT'
			}
		},
		Shelter: {
			screen: ShelterScreen,
			navigationOptions: {
				title: 'DETALJER'
			}
		}
	},
	{
		defaultNavigationOptions: {
			headerTintColor: '#ffffff',
			headerStyle: {
				backgroundColor: '#f50057'
			},
			headerTitleStyle: {
				color: '#ffffff',
				letterSpacing: 1,
				textAlign: 'right',
				flex: 1
			}
		}
	}
);

// top level container for navigation
const AppContainer = createAppContainer(TopLevelNavigator);

// top level container for navigation
export default AppContainer;
