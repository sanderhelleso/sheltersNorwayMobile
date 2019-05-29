import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import navigationService from './app/navigationService';

import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';

import HomeScreen from './app/screens/HomeScreen';
import ClosestShelterScreen from './app/screens/ClosestShelterScreen';
import SearchScreen from './app/screens/SearchScreen';
import ShelterMapScreen from './app/screens/ShelterMapScreen';

// setup global styles
import globalStyles from './app/globalStyles';
globalStyles();

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

// redux store for sharable app state
const store = configureStore();

// top level container for navigation
const AppContainer = createAppContainer(TopLevelNavigator);

const App = () => {
	return (
		<Provider store={store}>
			<AppContainer
				ref={(navigatorRef) => {
					navigationService.setTopLevelNavigator(navigatorRef);
				}}
			/>
		</Provider>
	);
};

export default App;
