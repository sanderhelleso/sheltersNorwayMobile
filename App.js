import React from 'react';
import { Navigation } from 'react-native-navigation';

import HomeView from './app/views/HomeView';

import registerScreens from './app/registerScreens';
import globalStyles from './app/globalStyles';

registerScreens();
globalStyles();

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
	  	root: {
			component: {
		  		name: 'Home'
			}
	  	},
	});
});

const App = () => {

    return (
		<HomeView />
    );
}

export default App;

