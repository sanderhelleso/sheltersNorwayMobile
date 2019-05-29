import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import styled from 'styled-components';

class SearchField extends Component {
	state = {
		keywords: ''
	};

	// update input text on change
	handleChangeText = (keywords) => {
		this.setState({ keywords });
	};

	render() {
		return (
			<StyledView>
				<StyledInput
					style={bottomBorder}
					selectionColor={'#f50057'}
					onChangeText={this.handleChangeText}
					value={this.state.keywords}
					placeholder="SØK BY, FYLKE, KOMMUNE..."
					selectionColor="rgba(245, 0, 87, 0.5)"
					tintColor="rgba(245, 0, 87, 0.2)"
				/>
			</StyledView>
		);
	}
}

export default SearchField;

const StyledView = styled.View`
	min-width: 75%;
	border-width: 0;
`;

const StyledInput = styled.TextInput`
	min-height: 60px;
	font-size: 20px;
	color: #f50057;
	text-transform: uppercase;
	letter-spacing: 1px;
`;

const bottomBorder = {
	borderBottomWidth: 3,
	borderBottomColor: '#f50057'
};
