import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableHighlight, Text } from 'react-native';
import { MapView } from 'expo';
import styled from 'styled-components';
import navigationService from '../../navigationService.js';
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

	seeDetails = (shelter) => {
		console.log(123);
		navigationService.navigate('Shelter', { shelter });
	};

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
					onCalloutPress={() => this.seeDetails(shelter)}
				>
					<MapView.Callout tooltip>
						<TouchableHighlight>
							<StyledMarkerView>
								<StyledMarkerTitle>{adresse}</StyledMarkerTitle>
								<StyledMarkerDesc>{kommune}</StyledMarkerDesc>
							</StyledMarkerView>
						</TouchableHighlight>
					</MapView.Callout>
				</MapView.Marker>
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

const StyledMarkerView = styled.View`
	background-color: #eeeeee;
	padding: 10px;
	border-radius: 6px;
	border: 1px solid #dddddd;
`;

const StyledMarkerTitle = styled.Text`
	font-size: 14px;
	font-weight: 600;
`;

const StyledMarkerDesc = styled.Text`
	font-size: 12px;
	color: #9e9e9e;
`;

const mapStateToProps = ({ shelters }) => {
	return { shelters };
};

export default connect(mapStateToProps, null)(ShelterMap);
