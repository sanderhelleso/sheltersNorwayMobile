import React, { Fragment, Component } from 'react';
import styled from 'styled-components';

import SearchResultListRow from './SearchResultListRow';
import SearchResultSorter from './SearchResultSorter';
import SearchResultToTopBtn from './SearchResultToTopBtn';

import sortResultListByValue from '../../lib/sortResultListByValue';

class SearchResultList extends Component {
	// malloc for scrollview
	listRef = null;

	// record scrollstate
	scrollState = {
		dir: false, // true = down, false = up
		y: 0
	};

	state = {
		sortBy: 'Adresse A-Z',
		result: [ ...this.props.result ],
		showBtn: false
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
			<SearchResultListRow
				key={shelter.properties.adresse}
				shelter={shelter}
				last={i === this.props.result.length - 1}
			/>
		));
	};

	scrollTop = () => this.listRef.scrollTo({ y: 0 });

	render() {
		return (
			<Fragment>
				{this.state.result.length > 1 && <SearchResultSorter updateSortBy={this.updateSortBy} />}
				<StyledScrollView
					ref={(ref) => (this.listRef = ref)}
					style={topBorder}
					showsVerticalScrollIndicator={false}
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
