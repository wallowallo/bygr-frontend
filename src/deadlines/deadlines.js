import React from 'react';
import styled from '@emotion/styled';
import {HeaderSpan} from '../common/styling';
import StatusColor from '../statusColors/statusColors';

const DeadlinesContainer = styled.div `
    width: 22rem;
    height: 2rem;
    display: inline-block;
`;

const DeadlineContainer = styled.div `
    margin-top: 0.5rem;
    width: 22rem;
    height: 1.5rem;
    display: inline-block;
`;

const StatusContainer = styled.div `
    width: 10rem;
    height: 1.5rem;
    display: inline-block;
`;

const TextContainer = styled.div `
    width: 10rem;
    height: 1.5rem;
    display: inline-block;
`;

const DeadlinesSpan = styled.span `
    margin-right: 0.5rem;
`;

export default class Deadlines extends React.Component {
  render() {
    var deadlines = this.props.deadlines;

    return (
        <DeadlinesContainer>
            <HeaderSpan>Deadlines</HeaderSpan>
            {deadlines.map((deadline, i) =>
                <DeadlineContainer key={i}>
                    <TextContainer>
                        <DeadlinesSpan>{deadline.name}</DeadlinesSpan>
                        <DeadlinesSpan>({new Date(deadline.date).toLocaleDateString()}):</DeadlinesSpan>
                    </TextContainer>

                    <StatusContainer>
                        <StatusColor status={deadline.status} />
                        <DeadlinesSpan>{deadline.status}</DeadlinesSpan>
                    </StatusContainer>
                </DeadlineContainer>
            )}
        </DeadlinesContainer>
    );
  }
}