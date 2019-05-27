import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import styled from 'styled-components';

const HomeView = () => {

    const cover = require('../assets/cover.jpg');

    return (
        <StyledImage source={cover}>
            <Text>
                Home
            </Text>
            <StyledOverlay />
        </StyledImage>
    )
}

export default HomeView;

const StyledOverlay = styled.View`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000000;
    opacity: 0.7;
`;

const StyledImage = styled.ImageBackground`
    flex: 1
`;
