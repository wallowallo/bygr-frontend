import React from 'react';
import {CommonSpan, HeaderSpan, ContainerDiv} from '../common/styling';

export default class Floor extends React.Component {
  render() {
    var floor = this.props.floor;

    return (
        <ContainerDiv>
            <HeaderSpan>Floor</HeaderSpan>
            <CommonSpan>{floor}</CommonSpan>
        </ContainerDiv>
    );
  }
}