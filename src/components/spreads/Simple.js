import React, { Component } from 'react';
import styled from 'styled-components';

export default class SimpleSpread extends Component {
    render(){
        const { hand } = this.props;

        const showHand = hand.map((h, k) => {
            return (
                <div key={k}>
                    <img src={`./deck/${h.id}.jpg`}/>
                </div>
            )
        })
        return(
            <LocalWrapper>
                <ContainerSpread>
                    <section>
                        <div>
                            <img src="./deck/back.jpg"/>
                        </div>
                        <div>
                            <img src="./deck/back.jpg"/>
                        </div>
                        <div>
                            <img src="./deck/back.jpg"/>
                        </div>
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
    height: 30vw;
    max-height: 212px;
`;

const Container = styled.div`
    text-align: center;
    width: 100vw;
    > section {
        margin: 0 auto;
        width: 100vw;
        max-width: 600px;
        display: grid;
        grid-template-columns: 5% 30% 30% 30% 5%;
        grid-template-rows: 100%;
        grid-template-areas: ' . one two three . ';
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
    }
`;
const ContainerHand = styled(Container)`
    position: absolute;
    top: 0;
`;
const ContainerSpread = styled(Container)`
    position: relative;
    img {
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
      }
`;