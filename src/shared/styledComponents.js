import styled from 'styled-components';


export const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    border: none;
    border-radius: 3px;
    width: 90%;
    border: 1px solid grey;
`;

export const Button = styled.button`
    color: ${(props) => {
        let color;
        switch (props.category) {
            case 'PRIME':
                color = '#7c7ccc';
                break;
            case 'DANGER':
                color = '#e21b1b';
                break;
            case 'WARN':
                color = '#e2a22c';
                break;
            default:
                color = 'black';
                break;
        }
        return color;
    }
    };
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 1px solid;
    border-radius: 2px;
    :hover {
        color: white;
        border: 1px solid red;
        background: red;
        cursor: pointer;
        padding: 0.30em 1.1em;
      }
`;