import styled from 'styled-components';

/*
* shared srtyled components to be used in components
*/

export const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    border: none;
    border-radius: 3px;
    width: 90%;
    border: 1px solid #d4d4d4;
`;

export const Button = styled.button`
    color: #8e8e8e;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 1px solid;
    border-radius: 2px;
    background-color: #ffffff00;
    :hover {
        background: ${(props) => {
        let color;
        switch (props.category) {
            case 'PRIME':
                color = '#00accac7';
                break;
            case 'DANGER':
                color = '#e21b1b';
                break;
            case 'WARN':
                color = '#f7ad19';
                break;
            default:
                color = 'black';
                break;
        }
        return color;
    }
    };
        border: 1px solid #ffffff00;
        color: white;
        cursor: pointer;
        padding: 0.30em 1.1em;
      }
`;