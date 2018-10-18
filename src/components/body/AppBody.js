import { AddItem } from './addItem/AddItem';
import { List } from './list/List';
import { OrderedList } from '../../containers/orderedList';
import styled from 'styled-components';
import React from 'react';

export const AppBody = () => {
    return (
        <Wrapper>
            <AddItem />
            <OrderedList />
        </Wrapper>
    )
};

const Wrapper = styled.section`
  margin: 8em;
`;
