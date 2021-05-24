import React, { Component }     from 'react';
import styled                   from 'styled-components';

export default class SpreadSheet extends Component {
    render(){
        const { hand, selectSpread } = this.props;

        let sheet = []
        let num = selectSpread.cards;
        while (num > 0) {
            num -= 1
            sheet.push(<div key={num}>
                    <img src="./deck/back.jpg"/>
                </div>)
        }
        const showHand = hand.map((h, k) => {
            return (
                <div key={k} style={{transform: `rotate(${180*h.rotation + 'deg'})`}}>
                    <img src={`./deck/${h.id}.jpg`}/>
                </div>
            )
        })
        return(
            <LocalWrapper>
                <ContainerSpread className={selectSpread.id}>
                    <section id="show">
                        {sheet}
                    </section>
                </ContainerSpread>
                <ContainerHand className={selectSpread.id}>
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
    height: 115vw;
    max-height: 800px;

    .spread-simple > section {
        grid-template-columns: 5% 30% 30% 30% 5%;
        grid-template-rows: 100%;
        grid-template-areas: ' . one two three . ';
      }
      .spread-cross > section {
        grid-template-columns: 5% 30% 30% 30% 5%;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas: 
            ' . . two . . '
            ' . four one five . '
            ' . . three . . ';
      }
      .spread-celtic-cross > section {
        grid-template-columns: 1fr 3fr 3fr 3fr 1fr 3fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas: 
          ' . . three . . seven . '
          ' . five one six . eight . '
          ' . . two . . nine . '
          ' . . four . . ten . ';
      }
      .spread-celtic-cross > section > div:nth-of-type(2) img {
        transform: rotate(90deg);
      }
`;

const Container = styled.div`
    text-align: center;
    width: 90vw;
    > section {
        margin: 0 auto;
        width: 100vw;
        max-width: 600px;
        display: grid;
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
            &:nth-of-type(6) {
                grid-area: six;
            }
            &:nth-of-type(7) {
                grid-area: seven;
            }
            &:nth-of-type(8) {
                grid-area: eight;
            }
            &:nth-of-type(9) {
                grid-area: nine;
            }
            &:nth-of-type(10) {
                grid-area: ten;
            }
            &:nth-of-type(11) {
                grid-area: eleven;
            }
            &:nth-of-type(12) {
                grid-area: twelve;
            }
            &:nth-of-type(13) {
                grid-area: thirteen;
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