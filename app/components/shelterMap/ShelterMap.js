import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const ShelterMap = () => {

    return (
        <MapView
            style={styles.container}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
    )
}

var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
});

export default ShelterMap;