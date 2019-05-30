import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

class ShelterInfoBtn extends Component {
	iconPrefix = Platform.OS === 'ios' ? 'ios' : 'md';

	render() {
		return (
			<ActionButton
				buttonColor="#f50057"
				fixNativeFeedbackRadius={true}
				onPress={this.props.onPress}
				shadowStyle={styles.shadow}
				renderIcon={() => (
					<Icon name={`${this.iconPrefix}-${this.props.icon}`} style={styles.actionButtonIcon} />
				)}
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

export default ShelterInfoBtn;
