import React, { Component } from 'react';
import { Text, Alert } from 'react-native';
import styled from 'styled-components';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateCLientLocationAction, setClosestShelterAction } from '../../store/actions/closestActions';

import ClosestShelterLoader from './ClosestShelterLoader';

import didLocationChange from '../../lib/didLocationChange';
import findClosestShelter from '../../lib/findClosestShelter';

class ClosestShelter extends Component {
	GEO_LOC_CONFIG = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

	state = {
		loading: true,
		error: false
	};

	componentDidMount() {
		console.log(this.props.closest);
		navigator.geolocation.getCurrentPosition(
			(pos) => {
				// compare current location to previously fetched location,
				// if a difference is found, update the users current location
				// and refetch the closest shelter, if not re-use previous closest shelter
				if (didLocationChange(pos.coords, this.props.closest.coords)) {
					const { latitude, longitude, accuracy } = pos.coords;

					// update the clients location
					this.props.updateCLientLocationAction({
						latitude,
						longitude,
						accuracy,
						timestamp: pos.timestamp
					});

					// find closest shelter
					const closest = findClosestShelter(latitude, longitude, this.props.shelters);

					// update the closest shelter for the user
					this.props.setClosestShelterAction(closest);
				}

				// complete loading and display result
				this.setState({ loading: false });
				alert(JSON.stringify(pos));
			},
			// if an error occured while attemping to fetch location,
			// display a generic error message and suggest user to re-try
			(error) => {
				Alert.alert(error.message);
				this.setState({
					loading: false,
					error: true
				});
			},
			this.GEO_LOC_CONFIG
		);
	}

	render() {
		return <StyledView>{<ClosestShelterLoader loading={this.state.loading} message="Søker..." />}</StyledView>;
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
