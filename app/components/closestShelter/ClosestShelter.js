import React, { Component } from 'react';
import { Constants, Location, Permissions } from 'expo';
import styled from 'styled-components';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateCLientLocationAction, setClosestShelterAction } from '../../store/actions/closestActions';

import ClosestShelterLoader from './ClosestShelterLoader';
import ClosestShelterError from './ClosestShelterError';

import didLocationChange from '../../lib/didLocationChange';
import findClosestShelter from '../../lib/findClosestShelter';
import Shelter from '../shelter/Shelter';

class ClosestShelter extends Component {
	GEO_LOC_CONFIG = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

	state = {
		loading: true,
		error: ''
	};

	componentDidMount() {
		this.getLocAndFind();
	}

	getPermission = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		return status === 'granted';
	};

	// find and update store with users location
	getLocAndFind = async () => {
		this.setState({ loading: true, error: '' });

		// ask for permission
		const gotPermission = await this.getPermission();
		if (!gotPermission) {
			return this.setState({
				loading: false,
				error: 'Tilgang til lokasjon ble avslått.'
			});
		}

		// attempt to get users location
		navigator.geolocation.getCurrentPosition(
			(pos) => {
				const didChange = didLocationChange(pos.coords, this.props.closest.coords);
				const hasNotFoundBefore = !this.props.closest.shelter.found;
				const shouldRefetch = didChange || hasNotFoundBefore;

				// compare current location to previously fetched location,
				// if a difference is found, update the users current location
				// and refetch the closest shelter, if not re-use previous closest shelter
				if (shouldRefetch) {
					const { latitude, longitude, accuracy } = pos.coords;

					// update the clients location
					this.props.updateCLientLocationAction({
						latitude,
						longitude,
						accuracy,
						timestamp: pos.timestamp
					});

					// continue to find closest
					this.findClosest(latitude, longitude);

					// if no need to refetch, stop loading and
					// display previously stored shelter
				} else this.setState({ loading: false });
			},
			// if an error occured while attemping to fetch location,
			// display a generic error message and suggest user to re-try
			() =>
				this.setState({
					loading: false,
					error: 'Klarte ikke laste inn nødvending data for å utføre handlingen.'
				}),
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

		// finish loading and display result
		this.setState({ loading: false });
	};

	renderClosestShelter = () => {
		if (this.state.loading) {
			return <ClosestShelterLoader loading={this.state.loading} message="Søker..." />;
		}

		if (this.state.error) {
			return <ClosestShelterError retry={this.getLocAndFind} message={this.state.error} />;
		}

		return <Shelter shelter={this.props.closest.shelter} />;
	};

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
