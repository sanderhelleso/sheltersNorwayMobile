import React, { Component } from 'react';
import { View, Text } from 'react-native';

import ShelterInfoListRow from './ShelterInfoListRow';

class ShelterInfoList extends Component {
	render() {
		const infoArr = Object.entries(this.props.info);
		return infoArr.map(([ field, value ], i) => {
			return <ShelterInfoListRow key={field} field={field} value={value} last={i === infoArr.length - 1} />;
		});
	}
}

export default ShelterInfoList;
