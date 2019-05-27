import { Platform } from 'react-native';

import {
    setCustomView,
    setCustomTextInput,
    setCustomText,
    setCustomImage,
    setCustomTouchableOpacity
} from 'react-native-global-props';

// Getting rid of that ugly line on Android and adding some custom style to all TextInput components.
const customTextInputProps = {
    underlineColorAndroid: 'rgba(0,0,0,0)',
    style: {
      borderWidth: 1,
      borderColor: 'gray',
      paddingVertical: 5,
      paddingHorizontal: 10,
      backgroundColor: 'white'
    }
};

// Setting default styles for all Text components.
const customTextProps = {
    style: {
      fontSize: 16,
      fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto',
      color: '#4f4f4f'
    }
};

// Makes every image resize mode cover by default.
const customImageProps = {
    resizeMode: 'cover'
};
  
// Adds a bigger hit box for all TouchableOpacity's.
const customTouchableOpacityProps = {
    hitSlop: { top: 15, right: 15, left: 15, bottom: 15 }
};

// sets all the default styles gloably
export default () => {
    setCustomTextInput(customTextInputProps);
    setCustomText(customTextProps);
    setCustomImage(customImageProps);
    setCustomTouchableOpacity(customTouchableOpacityProps);
}