import React, { Component } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

import { connect } from 'react-redux';

class ClosestShelter extends Component {
	state = {
		loading: true
	};

	componentDidMount() {}

	render() {
		return <Text>Shelter!!</Text>;
	}
}

const mapStateToProps = ({ closest, shelters }) => {
	return { closest, shelters };
};

const didLocationChange = ({ currCoords, oldCoords }) => {
	return currCoords.latitude !== oldCoords.latitude || currCoords.longitude !== oldCoords.longitude;
};

export default connect(mapStateToProps, null)(ClosestShelter);
