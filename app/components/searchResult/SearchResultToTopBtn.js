import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import iconPrefix from '../../lib/iconPrefix';

class SearchResultToTopBtn extends Component {
	render() {
		return (
			<ActionButton
				buttonColor="#f50057"
				position="right"
				fixNativeFeedbackRadius={true}
				shadowStyle={styles.shadow}
				onPress={this.props.onPress}
				renderIcon={() => <Icon name={`${iconPrefix}-arrow-up`} style={styles.actionButtonIcon} />}
			/>
		);
	}
}

const styles = StyleSheet.create({
	actionButtonIcon: {
		fontSize: 26,
		height: 28,
		color: 'white'
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5
	}
});

export default SearchResultToTopBtn;
