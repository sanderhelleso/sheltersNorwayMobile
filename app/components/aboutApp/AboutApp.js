import React, { Fragment } from 'react';
import { Linking, ScrollView } from 'react-native';
import styled from 'styled-components';

const AboutApp = () => {
	const intro =
		'Offentlige tilfluktsrom i Norge er et hjelpemiddel som er utviklet for Norges befolkning. Hensikten er å øke bevisstheten rundt offentlig tilgjengelige tilfluktsrommene som er i landet, samt å finne nærmeste tilfluktsrom basert på brukers lokasjon.';
	const dataInfo =
		'Applikasjonen er utviklet av Semanta DA, og benytter det offentlige datasettet som er levert av Direktoratet for Samfunnssikkerhet og Beredskap for å vise informasjon om rom og lokasjon.';
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
				<StyledLink key={i} onPress={() => Linking.openURL(link.url)} adjustsFontSizeToFit>
					{link.text}
				</StyledLink>
			);
		});
	};

	return (
		<ScrollView>
			<StyledView>
				<StyledText style={{ fontWeight: '600' }} adjustsFontSizeToFit>
					{intro}
				</StyledText>
				<StyledText adjustsFontSizeToFit>{dataInfo}</StyledText>
			</StyledView>
			<StyledView>
				<StyledHeading style={bottomBorder} adjustsFontSizeToFit>
					RESSURSER
				</StyledHeading>
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
	font-size: 24;
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
