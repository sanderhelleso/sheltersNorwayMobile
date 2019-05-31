import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import styled from 'styled-components';

import Button from '../sharable/Button';

class SearchHandler extends Component {
	state = {
		keywords: ''
	};

	// update input text on change
	handleChangeText = (keywords) => {
		this.setState({ keywords });
	};

	// perform search using passed in function from parent
	onPressHandler = () => {
		return this.props.onPress(this.state.keywords);
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
				<StyledSeperator />
				<Button text="SØK" icon="send" onPress={this.onPressHandler} />
			</StyledView>
		);
	}
}

export default SearchHandler;

const StyledView = styled.View`
	min-width: 75%;
	border-width: 0;
	flex: 3;
`;

const StyledInput = styled.TextInput`
	min-height: 60px;
	font-size: 20px;
	color: #f50057;
	text-transform: uppercase;
	letter-spacing: 1px;
`;

const StyledSeperator = styled.View`
	min-height: 100px;
	min-width: 1.5px;
	background-color: #eeeeee;
	margin: 25px auto;
`;

const bottomBorder = {
	borderBottomWidth: 3,
	borderBottomColor: '#f50057'
};
