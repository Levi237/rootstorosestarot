import React, { Component }     from 'react';
import styled                   from 'styled-components';

export default class CrossSpread extends Component {
    render(){
        return(
            <Container>
                <div>test</div><div>test</div><div>test</div><div>test</div><div>test</div>
            </Container>
        );
    };
};

const Container = styled.div`
    display: grid | inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 
    ' . one .'
    ' two three four'
    ' . five . ';
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
        &:nth-of-type(4) {
            grid-area: four;
        }
        &:nth-of-type(5) {
            grid-area: five;
        }
    }
`;