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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitChanges = this.handleSubmitChanges.bind(this);
    }

    // toggle edit mode 
    onToggleEditMode() {
        let newState = JSON.parse(JSON.stringify(this.state));
        newState.editMode = !this.state.editMode;
        this.setState(newState);
    }

    // listen to input changes
    handleChange(event) {
        let inputVal = event.target.value;
        let newState = JSON.parse(JSON.stringify(this.state));
        switch (event.target.name) {
            case 'name':
                newState.item.name = inputVal;
                break;

            case 'price':
                newState.item.price = Number(inputVal);
                break;

            case 'amount':
                newState.item.amount = Number(inputVal);
                break;

            default:
                break;
        }
        this.setState(newState);
    }

    // submit changes of item
    handleSubmitChanges(){
        this.props.onEditItem(this.props.id, this.state.item);
        this.onToggleEditMode();
    }

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
                                <ItemButton category="PRIME"
                                    onClick={() => this.handleSubmitChanges()} className="item-btn"> Update
                                </ItemButton>
                                <ItemButton category="DANGER"
                                    onClick={() => this.onToggleEditMode()} className="item-btn"> Cancel
                                </ItemButton>
                            </ItemWrapper>
                        ) : (
                            <ItemWrapper>
                                <CellWrapper>
                                    {this.state.item.name}
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
                                <ItemButton category="DANGER"
                                    onClick={() => this.props.onRemoveItem(this.props.id)} className="item-btn"> Delete
                                </ItemButton>
                                <ItemButton category="WARN"
                                    onClick={() => this.onToggleEditMode()} className="item-btn"> Edit
                                </ItemButton>
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

const ItemButton = styled(Button)`
    font-size: 8px;
    padding: 1px 3px 1px 3px;
    margin: 2px;
    float: right;
    :hover {
        padding: 1px 3px 1px 3px;
        margin: 2px;
    }
`;

const EditInput = styled(Input)`
    width: -webkit-fill-available;
    margin: 0px 4px 0px 0px;
    padding: 2px;
`;