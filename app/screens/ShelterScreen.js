import React from 'react';
import Shelter from '../components/shelter/Shelter';

const ShelterScreen = ({ navigation }) => {
	const { shelter } = navigation.state.params;

	return <Shelter shelter={shelter} />;
};

export default ShelterScreen;
