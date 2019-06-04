import React, { Component } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchHistory from './SearchHistory';
import SearchHandler from './SearchHandler';

import navigationService from '../../navigationService.js';
import filterSheltersByKeywords from '../../lib/filterSheltersByKeywords';
import { showSearchErrAlert, showSearchResultErrAlert } from '../../lib/alerts';
import { addSearchToHistoryAction } from '../../store/actions/searchActions';

class Search extends Component {
	MIN_SEARCH_LEN = 2;
	state = { loading: false };

	// find shelters from trimmed keywords
	findShelters = (keywords) => {
		keywords = keywords.replace(/ /g, '');
		if (this.failedSearchRequirements(keywords)) return;

		// check passed, continue and perform search
		this.setState({ loading: true });
		const result = filterSheltersByKeywords(this.props.shelters, keywords);

		// if result contains elements navigate to result screen and display
		if (result.length) {
			// navigate to result screen
			navigationService.navigate('SearchResult', { keywords, result });

			// avoid flickering during screen change
			setTimeout(() => {
				this.props.addSearchToHistoryAction({
					keywords,
					result,
					time: new Date().getTime()
				});
			}, 1000);
		} else showSearchResultErrAlert();

		this.setState({ loading: false });
	};

	// ensure requirements for search is met
	failedSearchRequirements = (keywords) => {
		const failed = !keywords || keywords.length < this.MIN_SEARCH_LEN;

		if (failed) showSearchErrAlert();
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

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ addSearchToHistoryAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

const StyledView = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;
