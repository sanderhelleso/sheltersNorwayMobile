import React, { Fragment, Component } from 'react';
import styled from 'styled-components';

import SearchResultListRow from './SearchResultListRow';
import SearchResultSorter from './SearchResultSorter';

import sortResultListByValue from '../../lib/sortResultListByValue';

class SearchResultList extends Component {
	state = { sortBy: 'Adresse A-Z', result: [ ...this.props.result ] };

	updateSortBy = (value) => {
		this.setState({
			sortBy: value,
			result: [ ...this.props.result ]
		});
	};

	renderList = () => {
		// renders the sorted list in the order selected by the dropdowns value
		return sortResultListByValue(this.state.result, this.state.sortBy).map((shelter, i) => (
			<SearchResultListRow key={i} shelter={shelter} last={i === this.props.result.length - 1} />
		));
	};

	render() {
		return (
			<Fragment>
				<SearchResultSorter updateSortBy={this.updateSortBy} />
				<StyledListCont style={topBorder} showsVerticalScrollIndicator={false}>
					{this.renderList()}
				</StyledListCont>
			</Fragment>
		);
	}
}

export default SearchResultList;

const StyledListCont = styled.ScrollView`
	margin: 7.5px 0;
	padding: 10px 0;
	min-height: 100%;
`;

const topBorder = {
	borderTopWidth: 1,
	borderTopColor: '#eeeeee'
};
