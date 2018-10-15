import React, { Component } from 'react';
import styled from 'styled-components';

export class List extends React.Component {
    render() {
        return (
            <ListWrapper>
                <p> this is a list </p>
            </ListWrapper >
        )
    }

};

const ListWrapper = styled.section`
    margin-right: 10em;
    float: right;
    width: 35%;
    padding: 1em;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    background-color: lightyellow;
    min-height: 20em;
    
`;
