import { Input, Button } from '../../shared/styledComponents';
import React from 'react';
import styled from '../../../node_modules/styled-components';

export class AddItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        console.log(this.state);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
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
                    <Input type="text" name="name" placeholder="Product Name" value={this.state.value} onChange={this.handleChange} />
                    <Input type="text" name="name" placeholder="Price" />
                    <Input type="text" name="name" placeholder="Amount" />
                    <br />
                    <Button category="PRIME" type="submit" value="Submit"> Add </Button>
                </form>
            </FormWrapper>
        )
    }
};

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
