import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import ActionButton from 'react-native-action-button';
import { Ionicons } from '@expo/vector-icons';
import iconPrefix from '../../lib/iconPrefix';

const FloatingActionButton = ({ onPress, icon }) => {
	return (
		<ActionButton
			buttonColor="#f50057"
			position="right"
			fixNativeFeedbackRadius={true}
			shadowStyle={styles.shadow}
			onPress={onPress}
			renderIcon={() => <Ionicons name={`${iconPrefix}-${icon}`} style={styles.actionButtonIcon} />}
		/>
	);
};

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

export default FloatingActionButton;
