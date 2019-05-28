import { Navigation } from 'react-native-navigation';

// register screens
export default () => {
    Navigation.registerComponent('Home', () => require('./views/HomeView').default);
    Navigation.registerComponent('ShelterMap', () => require('./views/ShelterMapView').default);
}
