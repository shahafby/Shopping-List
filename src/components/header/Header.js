import React from 'react';
import styled from 'styled-components';

export const Header = () => {
    return (
        <HeaderContiner>
            <h1>Shopping List Application</h1>
        </HeaderContiner>
    )
};

const HeaderContiner = styled.section`
padding: 1em;
background: #84e0c7d1;
color: white;
box-shadow: 0 10px 20px #a09999;
`;
