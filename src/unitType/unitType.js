import React from 'react';
import {CommonSpan, HeaderSpan, ContainerDiv} from '../common/styling';

export default class UnitType extends React.Component {
  render() {
    var unitType = this.props.unitType;

    return (
        <ContainerDiv>
            <HeaderSpan>Unit type</HeaderSpan>
            <CommonSpan>{unitType}</CommonSpan>
        </ContainerDiv>
    );
  }
}