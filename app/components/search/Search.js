import React, { Component } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components';

import SearchHistory from './SearchHistory';
import SearchHandler from './SearchHandler';

import { connect } from 'react-redux';

import filterSheltersByKeywords from '../../lib/filterSheltersByKeywords';

class Search extends Component {
	MIN_SEARCH_LEN = 2;
	state = { loading: false };

	findShelters = (keywords) => {
		if (this.failedSearchRequirements(keywords)) return;

		// check passed, continue and perform search
		this.setState({ loading: true });
		const result = filterSheltersByKeywords(this.props.shelters, keywords);
		this.setState({ loading: false });

		console.log(result);
	};

	// ensure requirements for search is met
	failedSearchRequirements = (keywords) => {
		const failed = !keywords || keywords.length < this.MIN_SEARCH_LEN;
		if (failed) {
			Alert.alert('Wops', 'Søkefelt må inneholde minimum 2 bokstaver for å utføre søk.');
		}

		return failed;
	};

	render() {
		return (
			<StyledView>
				<SearchHistory />
				<SearchHandler onPress={this.findShelters} disabled={this.state.loading} />
			</StyledView>
		);
	}
}

const mapStateToProps = ({ shelters }) => {
	return { shelters };
};

export default connect(mapStateToProps, null)(Search);

const StyledView = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;
