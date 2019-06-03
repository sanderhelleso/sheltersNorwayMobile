import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { MapView } from 'expo';

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

	state = { shelters: null };

	// delay marker rendering to avoid map flickering of inital position
	componentDidMount() {
		setTimeout(() => {
			this.setState({ shelters: this.props.shelters });
		}, 200);
	}

	// iterate over shelters and display a marker with information for ea shelter
	renderMarkers = () => {
		if (!this.state.shelters) return null;

		return this.state.shelters.features.map((shelter, i) => {
			// shelters geocoords
			const coords = shelter.geometry.coordinates;

			// shelters marker info
			const { adresse, kommune } = shelter.properties;

			return (
				<MapView.Marker
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
			<MapView style={mapStyles} initialRegion={this.defaultCoords}>
				{this.renderMarkers()}
			</MapView>
		);
	}
}

const mapStyles = StyleSheet.create({
	height: Dimensions.get('window').height,
	width: Dimensions.get('window').width
});

const mapStateToProps = ({ shelters }) => {
	return { shelters };
};

export default connect(mapStateToProps, null)(ShelterMap);
