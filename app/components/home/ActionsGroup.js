import React from 'react';
import styled from 'styled-components';

import ActionButton from './ActionButton';

const ActionsGroup = () => {

    // list of available actions presented to user
    // Find closest, search and see map
    const actions = [
        {
            text: 'NÆRMEST MEG'
        },
        {
            text: 'SØK'
        },
        {
            text: 'NORGESKART'
        }
    ];

    const renderActions = () => {
        return actions.map((action, i) => (
            <StyledBtnCont key={i}>
                <ActionButton {...action} />
            </StyledBtnCont>
        ))
    }

    return (
        <StyledView>
            {renderActions()}
        </StyledView>
    )
}

export default ActionsGroup;

const StyledView = styled.View`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const StyledBtnCont = styled.View`
    width: 65%;
    height: 50px;
    margin: 15px;
    border-radius: 2px;
    border: 1px solid #ffffff;
    background-color: rgba(20, 20, 20, 0.2);
`;