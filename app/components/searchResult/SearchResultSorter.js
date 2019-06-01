import React from 'react';
import { Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

const SearchResultSorter = ({ sortBy, updateSortBy }) => {
	const data = [
		{
			value: 'Adresse A-Z'
		},
		{
			value: 'Adresse Z-A'
		},
		{
			value: 'Kommune A-Z'
		},
		{
			value: 'Kommune Z-A'
		},
		{
			value: 'Distrikt A-Z'
		},
		{
			value: 'Distrikt Z-A'
		},
		{
			value: 'Plasser - Stigende'
		},
		{
			value: 'Plasser - Synkende'
		},
		{
			value: 'Areal - Stigende'
		},
		{
			value: 'Areal - Synkende'
		},
		{
			value: 'Byggeår - Stigende'
		},
		{
			value: 'Byggeår - Synkende'
		}
	];

	return (
		<Dropdown
			inputContainerStyle={{ borderBottomColor: 'transparent' }}
			selectedItemColor="#f50057"
			label="Sorter etter"
			data={data}
			value={sortBy || data[0].value}
			itemCount={data.length / 2}
			onChangeText={(value) => updateSortBy(value)}
		/>
	);
};

export default SearchResultSorter;
