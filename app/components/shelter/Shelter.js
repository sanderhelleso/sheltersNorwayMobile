import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import styled from 'styled-components';
import { MapView } from 'expo';
import ShelterInfo from './ShelterInfo';
import FloatingActionButton from '../sharable/FloatingActionButton';

class Shelter extends Component {
	// set default coords for maps initial render point and marker
	coordinates = this.props.shelter.geometry.coordinates;

	// malloc for marker
	mark = null;

	// default deltas for markers zoomed in / out state
	LAT_DELTA_OUT = 0.0422;
	LAT_DELTA_IN = 0.0025;
	LNG_DELTA_OUT = 0.0221;
	LNG_DELTA_IN = 0.0001;

	defaultCoords = {
		latitude: this.coordinates[1],
		longitude: this.coordinates[0],
		latitudeDelta: this.LAT_DELTA_OUT,
		longitudeDelta: this.LAT_DELTA_OUT
	};

	// decides if info info should display or not
	state = { displayInfo: false, map: null, zoomed: false };

	setDisplay = () => {
		this.setState({ displayInfo: !this.state.displayInfo });
		this.resetCoords();
	};

	resetCoords = () => {
		this.defaultCoords = {
			...this.defaultCoords,
			latitudeDelta: this.LAT_DELTA_OUT,
			longitudeDelta: this.LNG_DELTA_OUT
		};
	};

	zoomMap = (e) => {
		e.stopPropagation();

		this.defaultCoords = {
			...this.defaultCoords,
			latitudeDelta: this.LAT_DELTA_IN,
			longitudeDelta: this.LNG_DELTA_IN
		};

		this.state.map.animateToRegion(this.defaultCoords, 400);
		this.setState({ zoomed: true });
	};

	renderMapOrInfo = () => {
		if (this.state.displayInfo) {
			return <ShelterInfo info={this.props.shelter.properties} />;
		}

		return (
			<MapView
				style={mapStyles}
				initialRegion={this.defaultCoords}
				ref={(ref) => (this.state.map = ref)}
				onZoomOut={() => this.setState({ zoomed: false })}
				onLayout={() => this.mark && this.mark.showCallout()}
			>
				<MapView.Marker
					ref={(ref) => (this.mark = ref)}
					coordinate={{ latitude: this.coordinates[1], longitude: this.coordinates[0] }}
					title={this.props.shelter.properties.adresse}
					description={this.props.shelter.properties.kommune}
					onPress={(e) => this.zoomMap(e)}
					onCalloutPress={this.setDisplay}
				>
					<MapView.Callout tooltip>
						<TouchableHighlight>
							<StyledMarkerView>
								<StyledMarkerTitle>{this.props.shelter.properties.adresse}</StyledMarkerTitle>
								<StyledMarkerDesc>{this.props.shelter.properties.kommune}</StyledMarkerDesc>
							</StyledMarkerView>
						</TouchableHighlight>
					</MapView.Callout>
				</MapView.Marker>
			</MapView>
		);
	};

	render() {
		return (
			<StyledView>
				{this.renderMapOrInfo()}
				<FloatingActionButton
					icon={this.state.displayInfo ? 'map' : 'information-circle-outline'}
					onPress={this.setDisplay}
				/>
			</StyledView>
		);
	}
}

const mapStyles = StyleSheet.create({
	height: Dimensions.get('window').height,
	width: Dimensions.get('window').width
});

const StyledView = styled.View`
	height: ${Dimensions.get('window').height};
	width: ${Dimensions.get('window').width};
	flex: 1;
`;

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

export default Shelter;
