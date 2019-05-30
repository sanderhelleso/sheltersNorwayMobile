import React from 'react';
import { Platform } from 'react-native';

import ShelterInfoListRow from './ShelterInfoListRow';

const ShelterInfoList = ({ info }) => {
	iconPrefix = Platform.OS === 'ios' ? 'ios' : 'md';

	// get important fields
	const { adresse, areal, byggear, kommune, distriktsnavn, plasser } = info;

	// build data and icons
	const infoData = {
		plasser: {
			value: plasser,
			icon: 'people'
		},
		byggeår: {
			value: byggear,
			icon: 'hammer'
		},
		areal: {
			value: areal,
			icon: 'cube'
		},
		adresse: {
			value: adresse,
			icon: 'home'
		},
		kommune: {
			value: kommune,
			icon: 'flag'
		},
		distriktsnavn: {
			value: distriktsnavn,
			icon: 'pricetag'
		}
	};

	// iterate over each info and display
	const infoArr = Object.entries(infoData);
	return infoArr.map(([ field, data ], i) => {
		return (
			<ShelterInfoListRow
				key={field}
				field={field}
				value={data.value}
				icon={`${iconPrefix}-${data.icon}`}
				last={i === infoArr.length - 1}
			/>
		);
	});
};

export default ShelterInfoList;
