import React, { Component } from 'react';
import { Animated, View } from 'react-native';
import styled from 'styled-components';
import capitalizeString from '../../lib/capitalizeString';
import ShelterInfoList from './ShelterInfoList';

class ShelterInfo extends Component {
	state = { opacity: new Animated.Value(0) };

	componentDidMount() {
		Animated.timing(this.state.opacity, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true
		}).start();
	}

	buildDescription = () => {
		const { adresse, kommune } = this.props.info;
		return `${adresse}, ${capitalizeString(kommune)}`;
	};

	animationStyle = () => {
		return [
			{
				opacity: this.state.opacity
			},
			{ flex: 1, padding: 30 }
		];
	};

	render() {
		return (
			<Animated.View style={this.animationStyle()}>
				<StyledHeading adjustsFontSizeToFit>INFORMASJON</StyledHeading>
				<StyledDescription>{this.buildDescription()}</StyledDescription>
				<StyledListCont style={topBorder} showsVerticalScrollIndicator={false}>
					<ShelterInfoList info={this.props.info} />
				</StyledListCont>
			</Animated.View>
		);
	}
}

const StyledView = styled.View`
	flex: 1;
	padding: 20px 30px;
`;

const StyledHeading = styled.Text`
	font-size: 28;
	font-weight: 600;
	letter-spacing: 2px;
`;

const StyledDescription = styled.Text`
	font-size: 14;
	color: #9e9e9e;
	text-transform: capitalize;
	margin-top: 7.5px;
`;

const StyledListCont = styled.ScrollView`
	margin: 15px 0;
	padding: 20px 0;
	min-height: 100%;
`;

const topBorder = {
	borderTopWidth: 1,
	borderTopColor: '#eeeeee'
};

export default ShelterInfo;
