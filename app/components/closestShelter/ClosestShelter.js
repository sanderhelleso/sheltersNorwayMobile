import React, { Component } from 'react';
import { Text, Alert } from 'react-native';
import styled from 'styled-components';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateCLientLocationAction, setClosestShelterAction } from '../../store/actions/closestActions';

import ClosestShelterLoader from './ClosestShelterLoader';
import ClosestShelterError from './ClosestShelterError';

import didLocationChange from '../../lib/didLocationChange';
import findClosestShelter from '../../lib/findClosestShelter';

class ClosestShelter extends Component {
	GEO_LOC_CONFIG = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

	state = {
		loading: true,
		error: true
	};

	componentDidMount() {
		this.getLocAndFind();
	}

	getLocAndFind = () => {
		this.setState({ loading: true });

		// compare current location to previously fetched location,
		// if a difference is found, update the users current location
		// and refetch the closest shelter, if not re-use previous closest shelter
		const coords = this.getLocation();

		// if an error occured while attemping to fetch location,
		// display a generic error message and suggest user to re-try
		if (coords) {
			this.findClosest(coords);
		}

		this.setState({ loading: false });
	};

	// find and update store with users location
	getLocation = () => {
		navigator.geolocation.getCurrentPosition(
			(pos) => {
				if (didLocationChange(pos.coords, this.props.closest.coords)) {
					const { latitude, longitude, accuracy } = pos.coords;

					// update the clients location
					this.props.updateCLientLocationAction({
						latitude,
						longitude,
						accuracy,
						timestamp: pos.timestamp
					});

					return { latitude, longitude };
				}
			},
			// handle error
			() => this.setState({ error: true }),
			// configuration declared at top of component
			this.GEO_LOC_CONFIG
		);
	};

	// find and update store with closest shelter from fetched user location
	findClosest = (latitude, longitude) => {
		// find closest shelter
		const closest = findClosestShelter(latitude, longitude, this.props.shelters);

		// update the closest shelter for the user
		this.props.setClosestShelterAction(closest);
	};

	renderClosestShelter() {
		if (this.state.loading) {
			return <ClosestShelterLoader loading={this.state.loading} message="Søker..." />;
		}

		if (this.state.error) {
			return <ClosestShelterError retry={findClosestShelter} />;
		}

		return null;
	}

	render() {
		return <StyledView>{this.renderClosestShelter()}</StyledView>;
	}
}

const mapStateToProps = ({ closest, shelters }) => {
	return { closest, shelters };
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			updateCLientLocationAction,
			setClosestShelterAction
		},
		dispatch
	);
};

const StyledView = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export default connect(mapStateToProps, mapDispatchToProps)(ClosestShelter);
