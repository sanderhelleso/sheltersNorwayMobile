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
	width: 75%;
	border-width: 0;
`;

const StyledInput = styled.TextInput`
	border: 1.5px solid #f50057;
	min-height: 60;
	padding: 0 10px;
	font-size: 18px;
	border-radius: 4px;
	background-color: rgba(0, 0, 0, 0.5);
	color: #ffffff;
`;
