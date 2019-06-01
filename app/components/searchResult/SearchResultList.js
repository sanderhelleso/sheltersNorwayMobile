import React, { Fragment, Component } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

import SearchResultListRow from './SearchResultListRow';
import SearchResultSorter from './SearchResultSorter';
import SearchResultToTopBtn from './SearchResultToTopBtn';

import sortResultListByValue from '../../lib/sortResultListByValue';

class SearchResultList extends Component {
	// malloc for scrollview
	listRef = null;

	// screen height used to decide when to show scrollTop btn
	screenHeight = Dimensions.get('window').height;

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
			<SearchResultListRow key={i} shelter={shelter} last={i === this.props.result.length - 1} />
		));
	};

	scrollTop = () => {
		this.listRef.scrollTo({ y: 0 });
	};

	hideBtn = () => this.setState({ showBtn: false });

	handleScroll = (e) => {
		const y = e.nativeEvent.contentOffset.y;

		// update scroll dir
		if (y < this.scrollState.y) {
			this.scrollState.dir = false;
		} else this.scrollState.dir = true;

		// user must have ateleast scrolled x
		if (y >= 100) {
			// display button if user is scrolling downwards
			if (!this.scrollState.dir) {
				this.setState({ showBtn: true });
			} else this.hideBtn();

			// hide button if crieria is not met
		} else if (this.state.showBtn) this.hideBtn();

		this.scrollState.y = y;
	};

	render() {
		return (
			<Fragment>
				<SearchResultSorter updateSortBy={this.updateSortBy} />
				<StyledScrollView
					ref={(ref) => (this.listRef = ref)}
					style={topBorder}
					showsVerticalScrollIndicator={false}
					onScroll={this.handleScroll}
				>
					{this.renderList()}
				</StyledScrollView>
				{this.state.showBtn && <SearchResultToTopBtn onPress={this.scrollTop} />}
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
