import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import styled from 'styled-components';
import MapView, { Marker } from 'react-native-maps';

import ShelterInfoBtn from './ShelterInfoBtn';

class Shelter extends Component {
	// set default coords for maps initial render point and marker
	coordinates = this.props.shelter.geometry.coordinates;
	defaultCoords = {
		latitude: this.coordinates[1],
		longitude: this.coordinates[0],
		latitudeDelta: 0.0422,
		longitudeDelta: 0.0221
	};

	// decides if info info should display or not
	state = { displayInfo: false };

	setDisplay = () => {
		this.setState({ displayInfo: !this.state.displayInfo });
	};

	renderMapOrInfo = () => {
		if (this.state.displayInfo) {
			return <Text>Info</Text>;
		}

		return (
			<MapView style={mapStyles} initialRegion={this.defaultCoords}>
				<Marker coordinate={{ latitude: this.coordinates[1], longitude: this.coordinates[0] }} />
			</MapView>
		);
	};

	render() {
		return (
			<StyledView>
				{this.renderMapOrInfo()}
				<ShelterInfoBtn
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

export default Shelter;
