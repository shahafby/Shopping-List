import { AddItem } from './addItem/AddItem';
import { List } from './list/List';
import styled from 'styled-components';
import React from 'react';

export const AppBody = () => {
    return (
        <Wrapper>
            <AddItem />
            <List />
        </Wrapper>
    )
};

const Wrapper = styled.section`
  margin: 8em;
`;
