import React, { Component } from 'react';
import { Animated, Dimensions, Keyboard, UIManager, TextInput, StyleSheet } from 'react-native';
import styled from 'styled-components';
import Button from '../sharable/Button';

const { State: TextInputState } = TextInput;

class SearchHandler extends Component {
	state = {
		keywords: '',
		shift: new Animated.Value(0)
	};

	componentDidMount() {
		this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
		this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
	}

	componentWillUnmount() {
		this.keyboardDidShowSub.remove();
		this.keyboardDidHideSub.remove();
	}

	animateInput(gap) {
		Animated.timing(this.state.shift, {
			toValue: gap,
			duration: 200,
			useNativeDriver: true
		}).start();
	}

	handleKeyboardDidShow = (e) => {
		// caluclate gap to slide to display keyboard
		const { height: windowHeight } = Dimensions.get('window');
		const keyboardHeight = e.endCoordinates.height;
		const currentlyFocusedField = TextInputState.currentlyFocusedField();
		UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
			const gap = windowHeight - keyboardHeight - (pageY + height);
			if (gap >= 0) return;

			this.animateInput(gap);
		});
	};

	handleKeyboardDidHide = () => this.animateInput(0);

	// update input text on change
	handleChangeText = (keywords) => {
		this.setState({ keywords });
	};

	// perform search using passed in function from parent
	onPressHandler = () => {
		if (!this.props.loading) {
			return this.props.onPress(this.state.keywords);
		}
	};

	render() {
		return (
			<Animated.View style={[ styles.container, { transform: [ { translateY: this.state.shift } ] } ]}>
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
			</Animated.View>
		);
	}
}

export default SearchHandler;

const styles = StyleSheet.create({
	container: {
		minWidth: 75,
		flex: 1.2,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 30
	}
});

const StyledInput = styled.TextInput`
	min-height: 60px;
	font-size: 20px;
	color: #f50057;
	text-transform: uppercase;
	letter-spacing: 1px;
`;

const StyledSeperator = styled.View`
	min-height: 35px;
	min-width: 1.5px;
	background-color: #eeeeee;
	margin: 25px auto;
`;

const bottomBorder = {
	borderBottomWidth: 3,
	borderBottomColor: '#f50057'
};
