import React, { Component } from 'react';
import styled from 'styled-components';

export default class ThreeSpread extends Component {
    render(){
        return(
            <Container>
                <div>test</div><div>test</div><div>test</div>
            </Container>
        );
    };
};

const Container = styled.div`
    display: grid | inline-grid;
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