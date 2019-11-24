import React from 'react';
import {CommonSpan, HeaderSpan, ContainerDiv} from '../common/styling';

export default class Type extends React.Component {
  render() {
    var type = this.props.type;

    return (
        <ContainerDiv>
            <HeaderSpan>Type</HeaderSpan>
            <CommonSpan>{type}</CommonSpan>
        </ContainerDiv>
    );
  }
}