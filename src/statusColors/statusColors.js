import React from 'react';
import styled from '@emotion/styled';

const ColorDiv = styled.div `
    width: 1rem;
    height: 1rem;
    display: inline-block;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
`;

export default class StatusColor extends React.Component {
  render() {
    const status = this.props.status;

    const getColor = (status) => {
        switch(status) {
            case 'Sent':
                return 'green'
            case 'In progress':
                return 'GoldenRod'
            case 'Not sent':
                return 'red';

            default: 
                return 'red';
        }
    }

    const Color = styled.div `
        background-color: ${getColor(status)};
        width: 100%;
        height: 100%;
        border-radius: 50%;
        display: inline-block;
        opacity: 0.5;
    `;

    return (
        <ColorDiv>
            <Color />
        </ColorDiv>
    );
  }
}