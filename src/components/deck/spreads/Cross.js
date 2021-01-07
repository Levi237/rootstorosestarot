import React, { Component }     from 'react';
import styled                   from 'styled-components';

export default class CrossSpread extends Component {
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
                            <img src="./deck/back-bw.jpg"/>
                        </div>
                        <div>
                            <img src="./deck/back-bw.jpg"/>
                        </div>
                        <div>
                            <img src="./deck/back-bw.jpg"/>
                        </div>
                        <div>
                            <img src="./deck/back-bw.jpg"/>
                        </div>
                        <div>
                            <img src="./deck/back-bw.jpg"/>
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
    height: 120vw;
    max-height: 800px;
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
        grid-template-rows: auto;
        grid-template-areas: 
            ' . . one . . '
            ' . two three four . '
            ' . . five . . ';
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
`;