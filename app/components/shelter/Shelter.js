import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Shelter = ({ shelter: { geometry: { coordinates } } }) => {
	defaultCoords = {
		latitude: coordinates[1],
		longitude: coordinates[0],
		latitudeDelta: 0.0422,
		longitudeDelta: 0.0221
	};

	return (
		<MapView style={mapStyles} initialRegion={defaultCoords}>
			<Marker coordinate={{ latitude: coordinates[1], longitude: coordinates[0] }} />
		</MapView>
	);
};

const mapStyles = StyleSheet.create({
	height: Dimensions.get('window').height,
	width: Dimensions.get('window').width
});

export default Shelter;
