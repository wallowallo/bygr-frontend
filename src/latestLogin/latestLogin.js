import React from 'react';
import styled from '@emotion/styled';
import {CommonSpan, HeaderSpan} from '../common/styling';

const ContDiv = styled.div `
    width: 12rem;
    height: 6rem;
    display: inline-block;
`;


export default class LatestLogin extends React.Component {
  render() {
    var name = this.props.name;
    var date = new Date(this.props.date);

    return (
        <ContDiv>
            <HeaderSpan>Last login</HeaderSpan>
            <CommonSpan>{name}</CommonSpan>
            <CommonSpan>{date.toLocaleDateString()}</CommonSpan>
        </ContDiv>
    );
  }
}