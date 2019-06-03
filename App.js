import React from 'react';
import navigationService from './app/navigationService';

import { Provider } from 'react-redux';
import { persistor, store } from './app/store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

// setup global styles
import globalStyles from './app/globalStyles';
globalStyles();

// app container with navigation
import AppContainer from './app/AppContainer';

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<AppContainer
					ref={(navigatorRef) => {
						navigationService.setTopLevelNavigator(navigatorRef);
					}}
				/>
			</PersistGate>
		</Provider>
	);
};

export default App;
