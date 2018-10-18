import React from 'react';
import styled from 'styled-components';
import { ListItem } from './item/ListItem'
import { Button } from '../../../shared/styledComponents';
import { SortingKeys } from '../../../actions'


export class List extends React.Component {
    
    // building the list received from store
    createList() {
        const listItems = this.props.list.map((element) =>
            <ListItem
                key={element.id}
                value={element.item}
                id={element.id}
                onRemoveItem={this.props.onRemoveItem}
                onEditItem={this.props.onEditItem} />
        );
        return listItems;
    };


    // calc the total price of items
    calcSum() {
        let sum = 0;
        this.props.list.forEach(element => {
            sum += (element.item.price * element.item.amount);
        });
        return sum;
    }

    render() {
        return (
            <ListContainer>
                <ListHeading> My shopping list </ListHeading>
                <ListWrapper >
                    <ListHeaderButton onClick={
                        () => this.props.onSetSortKey(SortingKeys.BY_NAME)
                        }>Item</ListHeaderButton>
                    <ListHeaderButton onClick={
                        () => this.props.onSetSortKey(SortingKeys.BY_PRICE)
                        }>Price</ListHeaderButton>
                    <ListHeaderButton onClick={
                        () => this.props.onSetSortKey(SortingKeys.BY_QUANTITY)
                        }>Amount</ListHeaderButton>
                    <ListHeader>Sum</ListHeader>
                    <ul style={{ "listStyle": "none", "padding": "unset" }} >
                        {this.createList()}
                    </ul>
                </ListWrapper>
                <Total>Total Price: {this.calcSum()}$</Total>
                <ClearButton category={'DANGER'} onClick={this.props.onClearList}>Clear List</ClearButton>
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
    padding-left: 2em;
`;

const ListHeader = styled.section`
    width: 21%;
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
`;

const ListHeaderButton = styled(ListHeader)`
    :hover {
        cursor: pointer;
        color: #828282;
    }
`;


const ClearButton = styled(Button)`
    position: absolute;
    right:    10em;
    bottom:   0;
`;

const Total = styled.div`
    position: absolute;
    text-align: left;
    bottom:   6em;
    font-size: 12px;
    font-weight: 600;
`;
