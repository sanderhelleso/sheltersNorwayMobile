import { Navigation } from 'react-native-navigation'

export const goShelterMap = () => Navigation.setRoot({
    root: {
      stack: {
        id: 'ShelterMap',
        children: [
          {
            component: {
              name: 'ShelterMap',
            }
          }
      ],
      }
    }
});