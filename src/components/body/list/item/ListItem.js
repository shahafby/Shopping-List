import React, { Component } from 'react';
import styled from 'styled-components';
import './ListItem.css'

export class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: this.props.value };
    }
    render() {
        return (
            <div>
                <li>
                    <ItemWrapper>
                        <CellWrapper>
                            {this.state.data}
                        </CellWrapper>
                        <CellWrapper>
                            {this.state.data}
                        </CellWrapper>
                        <CellWrapper>
                            {this.state.data}
                        </CellWrapper>
                        <CellWrapper>
                            {this.state.data}
                        </CellWrapper>
                        <span 
                            onClick={() => alert('It works!')} className="delete-btn"> X</span>
                    </ItemWrapper>
                </li>
            </div >
        )
    }

};


const ItemWrapper = styled.section`
color: #8e8e8e;
:hover {
    background-color:beige;
} :hover .delete-btn {
    display: inline;
}​
`;

const CellWrapper = styled.section`
    width: 23%;
    display: inline-block;
    font-size: 12px;
`;
