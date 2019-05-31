import React, { Component } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components';

import SearchHistory from './SearchHistory';
import SearchHandler from './SearchHandler';

import { connect } from 'react-redux';

import navigationService from '../../navigationService.js';

import filterSheltersByKeywords from '../../lib/filterSheltersByKeywords';

class Search extends Component {
	// error handlers
	MIN_SEARCH_LEN = 2;
	ERR_ALERT_TITLE = 'Wops';
	ERR_ALERT_MSG = 'Søkefelt må inneholde minimum 2 bokstaver for å utføre søk.';

	state = { loading: false };

	findShelters = (keywords) => {
		if (this.failedSearchRequirements(keywords)) return;

		// check passed, continue and perform search
		this.setState({ loading: true });
		const result = filterSheltersByKeywords(this.props.shelters, keywords);

		// if result contains elements navigate to result screen and display
		if (result.length) {
			navigationService.navigate('SearchResult', { keywords, result });
		}

		this.setState({ loading: false });
	};

	// ensure requirements for search is met
	failedSearchRequirements = (keywords) => {
		const failed = !keywords || keywords.length < this.MIN_SEARCH_LEN;

		if (failed) this.showErrAlert();
		return failed;
	};

	// display error alert
	showErrAlert = () => {
		Alert.alert(this.ERR_ALERT_TITLE, this.ERR_ALERT_MSG);
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
