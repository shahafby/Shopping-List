import { Input, Button } from '../../../shared/styledComponents';
import React from 'react';
import styled from 'styled-components';
import { addItem } from '../../../actions/index';
import { connect } from 'react-redux';

export class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                name: '',
                price: '',
                amount: '',
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        let inputVal = event.target.value;
        let currentState = this.state;
        switch (event.target.name) {
            case 'name':
                currentState.item.name = inputVal;
                break;

            case 'price':
                currentState.item.price = inputVal;
                break;

            case 'amount':
                currentState.item.amount = inputVal;
                break;

            default:
                break;
        }
        this.setState(currentState);
    }


    handleSubmit(event) {
        if (this.state.item.price < 0 || this.state.item.amount < 1) {
            alert('Amount and price could not be negative')
        } else if (!this.state.item.price || !this.state.item.amount || this.state.item.name === '') {
            alert('Please make sure you field all fields')
        } else {
            let newItem = JSON.parse(JSON.stringify(this.state.item));
            this.props.dispatch(addItem(newItem));
            this.setState({
                item: {
                    name: '',
                    price: '',
                    amount: '',
                }
            });

        }
        event.preventDefault();
    }

    render() {
        return (
            <FormWrapper>
                <p>
                    Add new Item
                {`\n`}
                </p>
                <form onSubmit={this.handleSubmit}>
                    <Input type="text" name="name" placeholder="Product Name" value={this.state.item.name} onChange={this.handleChange} />
                    <Input type="number" name="price" placeholder="Price (only numbers)" value={this.state.item.price} onChange={this.handleChange} />
                    <Input type="number" name="amount" placeholder="Amount (only numbers)" value={this.state.item.amount} onChange={this.handleChange} />
                    <br />
                    <Button category="PRIME" type="submit" value="Submit"> Add </Button>
                </form>
            </FormWrapper>
        )
    }
};

AddItem = connect()(AddItem);
const FormWrapper = styled.section`
    margin-left: 10em;
    min-height: 222px;
    width: 25%;
    padding: 1em;
    float: left;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    background-color: #ffffffd6;
`;
