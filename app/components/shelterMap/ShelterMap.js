import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import { _getShelters } from '../../api/shelter';

class ShelterMap extends Component {
    defaultCoords = {
        latitude: 63.446827,
        longitude: 10.421906,
        latitudeDelta: 10,
        longitudeDelta: 10
    }

    // load shelters on load
    componentDidMount() {
        this.getShelters();
    }

    async getShelters() {
        await _getShelters();
    }

    render() {
        return (
            <MapView
                style={styles.container}
                initialRegion={this.defaultCoords}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
});

export default ShelterMap;