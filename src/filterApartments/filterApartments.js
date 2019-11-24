import React from 'react';
import styled from '@emotion/styled';
import {Select, MenuItem, FormControl, InputLabel} from '@material-ui/core'

const FilterContainer = styled.div `
    margin-left: 5%;
    margin-top: 2rem;
    width: 15rem;
    height: 4rem;
`;

export default class FilterApartments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
        
    render() {
        const types = ['All', ...this.props.types];
        const value = this.state.value;

        const onChange = (change) => {
            const value = change.target.value;
            this.setState({value});
            this.props.setType(value);
        }

        return (
            <FilterContainer>
                <FormControl variant="outlined" style={{width: '15rem', height: '2rem'}}>
                    <InputLabel>Filter on type</InputLabel>
                    <Select
                        onChange={onChange}
                        value={value}
                        labelWidth={100}
                    >
                        {types.map((type, i) =>
                            <MenuItem value={type} key={i}>{type}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </FilterContainer>
        );
    }
}