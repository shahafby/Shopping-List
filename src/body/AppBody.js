import { AddItem } from './addItem/AddItem';
import { List } from './list/List';
import styled from 'styled-components';
import React from 'react';

const numbers = [1, 2, 3, 4, 5, 1383930, 'gsdk'];

export const AppBody = () => {
    return (
        <Wrapper>
            <AddItem />
            <List numbers={numbers} />
        </Wrapper>
    )
};

const Wrapper = styled.section`
  margin: 8em;
`;
