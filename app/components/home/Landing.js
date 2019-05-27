import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

const Landing = () => {

    const staticText = {
        subHeading1: 'Offentlige',
        subHeading2: 'Tilfluktsrom',
        mainHeading: 'Norge',
        slogan: 'Vær Bevisst, Vær Trygg'
    }

    return (
        <StyledView>
            <StyledSubHeading>{staticText.subHeading1.toUpperCase()}</StyledSubHeading>
            <StyledSubHeading>{staticText.subHeading2.toUpperCase()}</StyledSubHeading>
            <StyledMainHeading>{staticText.mainHeading.toUpperCase()}</StyledMainHeading>
            <StyledBorder />
            <StyledSlogan>{staticText.slogan.toUpperCase()}</StyledSlogan>
        </StyledView>
    )
}

export default Landing;

const StyledView = styled.View`
    position: absolute;
    top: 15%;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const StyledSubHeading = styled.Text`
    font-size: 20px;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-weight: 600;
`;

const StyledMainHeading = styled.Text`
    font-size: 60px;
    color: #f50057;
    text-transform: uppercase;
    letter-spacing: 9px;
    font-weight: 800;
    line-height: 70px;
`;

const StyledSlogan = styled.Text`
    font-size: 16px;
    color: #ffffff;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 100;
`;

const StyledBorder = styled.View`
    max-width: 80px;
    min-width: 80px;
    min-height: 3px;
    background-color: #ffffff;
    margin: 15px auto;
`;