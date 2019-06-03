import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

const AboutApp = () => {
	const intro = `Offentlige tilfluktsrom i Norge er utviklet som et hjelpemiddel for norges befolkning til å bli mer bevist over de offentlige tilgjengelige tilfluktsromene som finnes i landet, samt hjelpe med å finne det nærmeste fra en hvilken som helst lokasjon.`;
	const dataInfo = `Applikasjonen er utviklet av Semanta DA og benytter det offentlige datasetet som er levert av Direktoratet for samfunnssikkerhet og beredskap.`;

	return (
		<StyledView>
			<StyledText style={{ fontWeight: '600' }}>{intro}</StyledText>
			<StyledText>{dataInfo}</StyledText>
		</StyledView>
	);
};

export default AboutApp;

const StyledView = styled.View`
	flex: 1;
	padding: 20px 30px;
	margin: 10px 0;
`;

const StyledText = styled.Text`
	text-align: left;
	margin: 15px 0;
`;
