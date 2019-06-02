import { Platform } from 'react-native';

// returns the icon prefix string depending on OS running the app
export default (Platform.OS === 'ios' ? 'ios' : 'md');
