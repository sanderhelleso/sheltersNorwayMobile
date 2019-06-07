import React from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import styled from 'styled-components';

const ClosestShelterLoader = ({ loading, message, color }) => {
	const renderLoader = () => {
		if (!loading) return null;

		return (
			<StyledView>
				<ActivityIndicator size={Platform.OS === 'ios' ? 'large' : 75} color="#f50057" animating={loading} />
				<StyledText color={color}>{message}</StyledText>
			</StyledView>
		);
	};

	return renderLoader();
};

const StyledView = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const StyledText = styled.Text`
	font-weight: 600;
	letter-spacing: 0.5px;
	margin-top: 50px;
	color: ${(props) => (props.color ? props.color : '#4f4f4f')};
`;

export default ClosestShelterLoader;
