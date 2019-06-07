import React, { Component, Fragment } from 'react';
import { StyleSheet, Dimensions, TouchableHighlight, Text } from 'react-native';
import { MapView } from 'expo';
import styled from 'styled-components';
import navigationService from '../../navigationService.js';
import { _getShelters } from '../../api/shelter';
import { connect } from 'react-redux';
import Loader from '../sharable/Loader';

class ShelterMap extends Component {
	// Trondheim, Norway
	defaultCoords = {
		latitude: 63.446827,
		longitude: 10.421906,
		latitudeDelta: 10,
		longitudeDelta: 10
	};

	state = { shelters: null, loading: true, markers: null };

	// delay marker rendering to avoid map flickering of inital position
	componentDidMount() {
		setTimeout(() => {
			this.setState({ shelters: this.props.shelters }, () => this.setMarkers());
		}, 200);
	}

	seeDetails = (shelter) => {
		navigationService.navigate('Shelter', { shelter });
	};

	// iterate over shelters and display a marker with information for ea shelter
	setMarkers = () => {
		if (!this.state.shelters) return null;

		const markers = this.state.shelters.features.map((shelter, i) => {
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
					onCalloutPress={() => this.seeDetails(shelter)}
				/>
			);
		});

		this.setState({
			markers,
			loading: false
		});
	};

	renderLoader = () => {
		if (!this.state.loading) return null;

		return (
			<StyledLoader>
				<Loader loading={this.state.loading} />
			</StyledLoader>
		);
	};

	render() {
		return (
			<Fragment>
				<MapView style={mapStyles} initialRegion={this.defaultCoords}>
					{this.state.markers || null}
				</MapView>
				{this.renderLoader()}
			</Fragment>
		);
	}
}

const mapStyles = StyleSheet.create({
	height: Dimensions.get('window').height,
	width: Dimensions.get('window').width
});

const StyledLoader = styled.View`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	min-width: 100%;
	min-height: 100%;
	z-index: 2;
	background-color: rgba(20, 20, 20, 0.7);
`;

const mapStateToProps = ({ shelters }) => {
	return { shelters };
};

export default connect(mapStateToProps, null)(ShelterMap);
