import { Platform } from 'react-redux';

// returns the icon prefix string depending on OS running the app
export default (Platform.OS === 'ios' ? 'ios' : 'md');
