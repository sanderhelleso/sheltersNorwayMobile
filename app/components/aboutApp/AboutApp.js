import React, { Fragment } from 'react';
import { Linking, ScrollView } from 'react-native';
import styled from 'styled-components';

const AboutApp = () => {
	const intro = `Offentlige tilfluktsrom i Norge er utviklet som et hjelpemiddel for norges befolkning til å bli mer bevist over de offentlige tilgjengelige tilfluktsromene som finnes i landet, samt hjelpe med å finne det nærmeste fra en hvilken som helst lokasjon.`;
	const dataInfo = `Applikasjonen er utviklet av Semanta DA og benytter det offentlige datasetet som er levert av Direktoratet for samfunnssikkerhet og beredskap til å vise rom informasjon og lokasjon.`;
	const links = [
		{
			text: 'Semanta DA',
			url: 'http://semanta.no/'
		},
		{
			text: 'Offentlige Tilfluktsrom i Norge',
			url: 'https://offentligetilfluktsrom.no/'
		},
		{
			text: 'Direktoratet for samfunnssikkerhet og beredskap',
			url: 'https://www.dsb.no/'
		}
	];

	const renderLinks = () => {
		return links.map((link, i) => {
			return (
				<StyledLink key={i} onPress={() => Linking.openURL(link.url)}>
					{link.text}
				</StyledLink>
			);
		});
	};

	return (
		<ScrollView>
			<StyledView>
				<StyledText style={{ fontWeight: '600' }}>{intro}</StyledText>
				<StyledText>{dataInfo}</StyledText>
			</StyledView>
			<StyledView>
				<StyledHeading style={bottomBorder}>RESSURSER</StyledHeading>
				{renderLinks()}
			</StyledView>
		</ScrollView>
	);
};

export default AboutApp;

const StyledView = styled.View`
	flex: 1;
	padding: 20px 30px;
	margin-top: 10px;
`;

const StyledText = styled.Text`
	text-align: left;
	margin: 15px 0;
`;

const StyledLink = styled.Text`
	color: #f50057;
	font-weight: 800;
	letter-spacing: 1px;
	margin: 7.5px 0;
`;

const StyledHeading = styled.Text`
	letter-spacing: 3px;
	font-size: 24px;
	font-weight: 800;
	color: #9e9e9e;
	opacity: 0.5;
	padding-bottom: 10px;
	margin: 0;
	margin-bottom: 15px;
`;

const bottomBorder = {
	borderBottomWidth: 1,
	borderBottomColor: '#eeeeee'
};
