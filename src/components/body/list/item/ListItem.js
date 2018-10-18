import styled from 'styled-components';
import React from 'react';
import { Input, Button } from '../../../../shared/styledComponents';
import './ListItem.css'

export class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.value,
            editMode: false
        };
    }

    onToggleEditMode() {
        let newState = JSON.parse(JSON.stringify(this.state));
        newState.editMode = !this.state.editMode;
        this.setState(newState);
    }

    // handleChange(event) {
    //     let inputVal = event.target.value;
    //     let newState = this.state;
    //     switch (event.target.name) {
    //         case 'name':
    //             newState.item.name = inputVal;
    //             break;

    //         case 'price':
    //             newState.item.price = inputVal;
    //             break;

    //         case 'amount':
    //             newState.item.amount = inputVal;
    //             break;

    //         default:
    //             break;
    //     }
    //     this.setState(newState);
    // }

    render() {
        return (
            <div>
                <li>
                    {this.state.editMode ?
                        (
                            <ItemWrapper>
                                <CellWrapper>
                                    <EditInput type="text" name="name" value={this.state.item.name} onChange={this.handleChange} />
                                </CellWrapper>
                                <CellWrapper>
                                    <EditInput type="number" name="price" value={this.state.item.price} onChange={this.handleChange} />
                                </CellWrapper>
                                <CellWrapper>
                                    <EditInput type="number" name="amount" value={this.state.item.amount} onChange={this.handleChange} />
                                </CellWrapper>
                                <CellWrapper style={{ "width": "12%" }}>
                                    {this.state.item.price * this.state.item.amount}$
                                </CellWrapper>
                            </ItemWrapper>
                        ) : (
                            <ItemWrapper>
                                <CellWrapper>
                                    <p>{this.state.item.name}</p>
                                </CellWrapper>
                                <CellWrapper>
                                    {this.state.item.price}$
                                </CellWrapper>
                                <CellWrapper>
                                    {this.state.item.amount}
                                </CellWrapper>
                                <CellWrapper style={{ "width": "12%" }}>
                                    {this.state.item.price * this.state.item.amount}$
                                </CellWrapper>
                                <DeleteButton category="DANGER"
                                    onClick={() => this.props.onRemoveItem(this.props.id)} className="item-btn"> Delete
                                </DeleteButton>
                                <DeleteButton category="WARN"
                                    onClick={() => this.onToggleEditMode()} className="item-btn"> Edit
                                </DeleteButton>
                            </ItemWrapper>
                        )}
                </li>
            </div >
        )
    }

};


const ItemWrapper = styled.section`
color: #8e8e8e;
:hover {
    background-color:beige;
} :hover .item-btn {
    display: inline;
}​
`;

const CellWrapper = styled.section`
    width: 21%;
    display: inline-block;
    font-size: 12px;
`;

const DeleteButton = styled(Button)`
    font-size: 8px;
    padding: 1px 3px 1px 3px;
    margin: 2px;
    :hover {
        padding: 1px 3px 1px 3px;
        margin: 2px;
    }
`;

const EditInput = styled(Input)`
    width: -webkit-fill-available;
    margin: 0px 4px 0px 0px;
`;