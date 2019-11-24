/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from 'react';
import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Buyer from '../buyer/buyer';
import Floor from '../floor/floor';
import Type from '../type/type';
import UnitType from '../unitType/unitType';
import LatestLogin from '../latestLogin/latestLogin';
import Deadlines from '../deadlines/deadlines';
import FilterApartments from '../filterApartments/filterApartments';

const cardStyling = css`
    width: 100%;
    box-shadow: 2px 2px 2px 2px gainsboro, 2px 3px 5px 2px gainsboro !important;
`;

const flexStyling = css`
    display: flex;
    flex-flow: row wrap;
    max-height: 15rem;
`;

const CardContainer = styled.div `
    margin: 0 5%;
`;

const BasicInfoContainer = styled.div `
    width: 10rem;
    height: 12rem;
    display: inline-block;
    margin-left: 1rem;
`;

const CardHeader = styled.h3 `
    margin: 0;
    margin-top: 2rem;
    display: inline-block;
    width: 15rem;
    height: 3rem;
`;

export default class BuyerInfoCards extends React.Component {
    constructor() {
        super()
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
            apartments: [],
            types: []
        };
    }

    componentDidMount() {
        fetch('https://localhost:44399/api/buyer-info/')
            .then(res => res.json())
            .then(
                result => {
                    this.setState({isLoaded: true, data: result, apartments: result, types: result.map(x => x.layoutType)});
                },
                error => {
                    this.setState({isLoaded: true, error});
                }
            )
    }

    setType = (type) => {
        if (type === 'All')
            return this.setState({ apartments: this.state.data });

        this.setState({ apartments: this.state.data.filter(x => x.layoutType === type) });
    };

    render() {
        const { error, isLoaded, apartments, types } = this.state;

        if (error) 
            return <div>Error: {error.message}</div>
        else if (!isLoaded)
            return <div>Loading...</div>
        else
            return (
                <div>
                    <FilterApartments types={types} setType={this.setType}/>
                    {apartments.map((apartment, i) =>
                        <CardContainer key={i}>
                            <CardHeader>Building - {apartment.name}</CardHeader>
                            <Card css={cardStyling}>
                                <CardContent css={flexStyling}>
                                    <BasicInfoContainer>
                                        <Floor floor={apartment.floor}/>
                                        <UnitType unitType={apartment.type}/>
                                        <Type type={apartment.layoutType}/>
                                    </BasicInfoContainer>

                                    {apartment.buyers.map((buyer, i) =>
                                        <Buyer buyer={buyer} index={i} key={i} />
                                    )}

                                    <LatestLogin name={apartment.buyers[0].displayName} date={apartment.buyers[0].lastVisitDate}/>

                                    <Deadlines deadlines={apartment.deadlines}/>
                                </CardContent>
                            </Card>
                        </CardContainer>
                    )}
                </div>
            );
    }
}