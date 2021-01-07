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
            <LocalWrapper>
                <ContainerSpread>
                    <section>
                        <div></div><div></div><div></div>
                    </section>
                </ContainerSpread>
                <ContainerHand>
                    <section>

                    {showHand}
                    </section>
                </ContainerHand>

            </LocalWrapper>
        );
    };
};

const LocalWrapper = styled.div`
    position: relative;
    height: 40vw;
    max-height: 252px;
`;

const Container = styled.div`
    text-align: center;
    width: 100vw;
    > section {
        margin: 0 auto;
        width: 100vw;
        max-width: 600px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: ' one two three ';
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
    }
`;
const ContainerHand = styled(Container)`
    position: absolute;
    top: 0;
    > section {
        > div {

            > img {
                max-width: 80%;
            }
        }
    }
`;
const ContainerSpread = styled(Container)`
    position: relative;
    > section {
    > div {
        height: 250px;
        margin-left: 20px;
        background-color: blue;
        border: solid black 1px;
        width: 158px;
        background-image: url(./deck/back.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        > img {
            max-width: 80%;
        }
    }
}
`;