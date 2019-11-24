import React from 'react';
import styled from '@emotion/styled';
import {CommonSpan, HeaderSpan} from '../common/styling';

const BuyerContainer = styled.div `
    width: 12rem;
    height: 12rem;
`;

export default class Buyer extends React.Component {
  render() {
    var buyer = this.props.buyer;
    var index = this.props.index;

    return (
        <BuyerContainer>
            <HeaderSpan>Buyer {index + 1}</HeaderSpan>
            <CommonSpan>{buyer.displayName}</CommonSpan>
            <CommonSpan>{buyer.phoneNumber}</CommonSpan>
            <CommonSpan>{buyer.email}</CommonSpan>
            <CommonSpan>Invited:</CommonSpan>
        </BuyerContainer>
    );
  }
}