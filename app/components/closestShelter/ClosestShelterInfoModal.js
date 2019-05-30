import React from 'react';
import { Modal, View, Text } from 'react-native';

const ClosestShelterInfoModal = ({ visible, button }) => {
	return (
		<Modal animationType="fade" transparent={false} visible={visible} onRequestClose={() => {}}>
			<View style={{ marginTop: 22 }}>
				<View>
					<Text>Hello World!</Text>
				</View>
			</View>
			{button}
		</Modal>
	);
};

export default ClosestShelterInfoModal;
