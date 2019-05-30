import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
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

	// decides if info modal should display or not
	state = { isModalOpen: false };

	openModal = () => {
		this.setState({ isModalOpen: !this.state.isModalOpen });
	};

	render() {
		return (
			<StyledView>
				<MapView style={mapStyles} initialRegion={this.defaultCoords}>
					<Marker coordinate={{ latitude: this.coordinates[1], longitude: this.coordinates[0] }} />
				</MapView>
				<ShelterInfoBtn
					icon={this.state.isModalOpen ? 'close' : 'information-circle-outline'}
					onPress={this.openModal}
				/>
			</StyledView>
		);
	}
}

const mapStyles = StyleSheet.create({
	height: Dimensions.get('window').height,
	width: Dimensions.get('window').width
});

const StyledView = styled.View`flex: 1;`;

export default Shelter;
