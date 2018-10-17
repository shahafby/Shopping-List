import React, { Component } from 'react';
import styled from 'styled-components';
import { ListItem } from './item/ListItem'
import { Button } from '../../shared/styledComponents';


export class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { numbers: this.props.numbers };
    }

    createList() {
        const numbers = this.state.numbers;
        const listItems = numbers.map((number) =>
            <ListItem key={number.toString()}
                value={number} />
        );
        return listItems;
    };

    render() {
        return (
            <ListContainer>
                <ListHeading> My shopping list </ListHeading>
                <ListWrapper >
                    <ListHeader>Item</ListHeader>
                    <ListHeader>Quantity</ListHeader>
                    <ListHeader>Item price</ListHeader>
                    <ListHeader>Sum</ListHeader>
                    <ul style={{ "listStyle": "none", "padding": "unset" }} >
                        {this.createList()}
                    </ul>
                </ListWrapper>
                <ClearButton category={'DANGER'}>Clear List</ClearButton>
            </ListContainer >
        )
    }
};

const ListContainer = styled.div`
    margin-right: 10em;
    float: right;
    width: 35%;
    padding: 1em;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    background-color: #ffffb9e8;
    min-height: 20em;
    position: relative;

`;

const ListHeading = styled.p`
    text-align: center
`;


const ListWrapper = styled.div`
    text-align: left;
`;

const ListHeader = styled.section`
    width: 23%;
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
`;


const ClearButton = styled(Button)`
position: absolute;
right:    10em;
bottom:   0;
`;
