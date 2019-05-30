import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { _getShelters } from '../../api/shelter';

import { connect } from 'react-redux';

class ShelterMap extends Component {
	// Trondheim, Norway
	defaultCoords = {
		latitude: 63.446827,
		longitude: 10.421906,
		latitudeDelta: 10,
		longitudeDelta: 10
	};

	renderMarkers = () => {
		return this.props.shelters.features.map((shelter, i) => {
			// shelters geocoords
			const coords = shelter.geometry.coordinates;

			// shelters marker info
			const { adresse, kommune } = shelter.properties;

			return (
				<Marker
					key={i}
					coordinate={{ latitude: coords[1], longitude: coords[0] }}
					title={adresse}
					description={kommune}
				/>
			);
		});
	};

	render() {
		return (
			<MapView style={styles.container} initialRegion={this.defaultCoords}>
				{this.renderMarkers()}
			</MapView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	}
});

const mapStateToProps = ({ shelters }) => {
	return { shelters };
};

export default connect(mapStateToProps, null)(ShelterMap);
