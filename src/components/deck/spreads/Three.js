import React, { Component } from 'react';
import styled from 'styled-components';

export default class ThreeSpread extends Component {
    render(){
        const { hand } = this.props;

        const showHand = hand.map((h, k) => {
            return (
                <div key={k}>
                    <img src={`./deck/${h.number}.jpg`}/>
                </div>
            )
        })
        return(
            <Container>
                {showHand}
            </Container>
        );
    };
};

const Container = styled.div`
    text-align: center;
    width: 600px;
    margin: 0 auto;
    display: grid;
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
        > img {
            max-width: 80%;
        }
    }
`;