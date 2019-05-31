import React, { Component } from 'react';
import styled from 'styled-components';

import SearchHistory from './SearchHistory';
import SearchHandler from './SearchHandler';

import { connect } from 'react-redux';

class Search extends Component {
	findShelters = (keywords) => {};

	render() {
		return (
			<StyledView>
				<SearchHistory />
				<SearchHandler onPress={this.findShelters} />
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
