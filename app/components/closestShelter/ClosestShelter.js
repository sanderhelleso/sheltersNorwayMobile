import React, { Component } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

import { bindActionCreators } from 'react';
import { connect } from 'react-redux';
import { updateCLientLocationAction } from '../../store/actions/locationActions';

class ClosestShelter extends Component {
	state = {
		loading: true
	};

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			(pos) => {
				const location = pos;
				alert(location);
			},
			(error) => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
	}

	render() {
		return <Text>Shelter!!</Text>;
	}
}

const mapStateToProps = ({ closest, shelters }) => {
	return { closest, shelters };
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			updateCLientLocationAction
		},
		dispatch
	);
};

const didLocationChange = ({ currCoords, oldCoords }) => {
	return currCoords.latitude !== oldCoords.latitude || currCoords.longitude !== oldCoords.longitude;
};

export default connect(mapStateToProps, mapDispatchToProps)(ClosestShelter);
