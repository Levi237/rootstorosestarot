import React, { Component } from 'react';
import styled from 'styled-components';

export default class ThreeSpread extends Component {
    render(){
        const { select } = this.props;
        return(
            <Container>
                {/* <div>{ select && select[0]}</div><div>{ select && select[1]}</div><div>{ select && select[2]}</div> */}
            </Container>
        );
    };
};

const Container = styled.div`
    display: grid | inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 
    ' one two three';
    > div {
        &:first-of-type {
            grid-area: one;
        }
        &:nth-of-type(2) {
            grid-area: two;
        }
        &:nth-of-type(3) {
            grid-area: three;
        }
    }
`;