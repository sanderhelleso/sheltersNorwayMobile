import React, { Fragment, Component } from 'react';
import styled from 'styled-components';

import SearchResultListRow from './SearchResultListRow';
import SearchResultSorter from './SearchResultSorter';
import SearchResultToTopBtn from './SearchResultToTopBtn';

import sortResultListByValue from '../../lib/sortResultListByValue';

class SearchResultList extends Component {
	listRef = null;

	state = {
		sortBy: 'Adresse A-Z',
		result: [ ...this.props.result ]
	};

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

	scrollTop = () => {
		this.listRef.scrollTo({ y: 0 });
	};

	render() {
		return (
			<Fragment>
				<SearchResultSorter updateSortBy={this.updateSortBy} />
				<StyledScrollView
					style={topBorder}
					showsVerticalScrollIndicator={false}
					ref={(ref) => (this.listRef = ref)}
				>
					{this.renderList()}
				</StyledScrollView>
				<SearchResultToTopBtn onPress={this.scrollTop} />
			</Fragment>
		);
	}
}

export default SearchResultList;

const StyledScrollView = styled.ScrollView`
	margin: 7.5px 0;
	padding: 10px 0;
	min-height: 100%;
`;

const topBorder = {
	borderTopWidth: 1,
	borderTopColor: '#eeeeee'
};
