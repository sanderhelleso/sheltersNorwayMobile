import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';

const ActionButton = ({ text }) => {

    return (
        <TouchableOpacity style={{ height: 100 }}>
            <StyledText>{text}</StyledText>
        </TouchableOpacity>
    )
}

export default ActionButton;

const StyledText = styled.Text`
    color: #ffffff;
    text-align: center;
    margin-top: 12.5px;
`;