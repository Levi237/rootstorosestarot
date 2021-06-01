import React, { Component } from 'react';
import styled               from 'styled-components';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
export default class SpreadContainer extends Component {



    render(){
        const { hand, selectSpread } = this.props;

        let sheet = [];
        let num = selectSpread.cards;
        while (num > 0) {
            num -= 1;
            sheet.push(<div key={num}><img src="./deck/back.jpg" alt="deck back"/></div>);
        };
        const showHand = hand.map((h, k) => {
            return (
                <div key={k} >
                    <img style={{transform: `rotate(${180*h.rotation + 'deg'})`}} src={`./deck/${h.id}.jpg`} alt={`${h.title}`}/>
                </div>
            );
        })
        return(
            <LocalWrapper>
                    <ContainerSpread className={selectSpread.id}>
                        <section id="show">
                            {sheet}
                        </section>
                    </ContainerSpread>
                    <ContainerDealt className={selectSpread.id}>
                        <section>
                            {showHand}
                        </section>
                    </ContainerDealt>
            </LocalWrapper>
        );
    };
};

const Container = styled.div`
    text-align: center;
    width: 100%;
    position: relative;
    > section {
        margin: 0 auto;
        position: relative;
        margin: 0 auto;
        width: 100%;
        display: grid;
        > div {
            &:first-of-type { grid-area: one; }
            &:nth-of-type(2) { grid-area: two; }
            &:nth-of-type(3) { grid-area: three; }
            &:nth-of-type(4) { grid-area: four; }
            &:nth-of-type(5) { grid-area: five; }
            &:nth-of-type(6) { grid-area: six; }
            &:nth-of-type(7) { grid-area: seven; }
            &:nth-of-type(8) { grid-area: eight; }
            &:nth-of-type(9) { grid-area: nine; }
            &:nth-of-type(10) { grid-area: ten; }
            &:nth-of-type(11) { grid-area: eleven; }
            &:nth-of-type(12) { grid-area: twelve; }
            &:nth-of-type(13) { grid-area: thirteen; }
            > img {
                max-width: 80%;
            }
        }
    }
    @media only screen and (max-width: 640px) {
        width: 100vw;
        > section {
            width: 100%!important;
        }
    }
`;
const ContainerDealt = styled(Container)`
    position: absolute;
    top: 0;
`;
const ContainerSpread = styled(Container)`
    position: relative;
    img {
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
        opacity: .2;
      }
`;

const LocalWrapper = styled.div`
    position: relative;

//-----------------------------------------------------> SIMPLE SPREADS
    .spread-three-simple > section {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 100%;
        grid-template-areas: ' one two three ';
    }
    .spread-five-simple > section {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 100%;
        grid-template-areas: ' one two three four five ';
    }
//-----------------------------------------------------> HORSESHOE SPREAD
    .spread-horseshoe > section {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas: 
            ' one . . . . . seven '
            ' . two three . five six . '
            ' . . . four . . .';
            img {
                max-width: 100%!important;
            }
    }
        
    .spread-horseshoe > section > div:nth-of-type(2),
    .spread-horseshoe > section > div:nth-of-type(6) {
        transform: translateY(-50%);
    }
    .spread-horseshoe > section > div:nth-of-type(4) {
        transform: translateY(-50%);
    }
//-----------------------------------------------------> CROSS SPREAD
    .spread-cross > section {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas: 
            ' . . two . . '
            ' . four one five . '
            ' . . three . . ';
            width: calc(126vh - 240px);
    }
    .spread-ten-celtic-cross > section {
        grid-template-columns: 3fr 3fr 3fr 1fr 3fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas: 
            ' . three . . seven '
            ' five one six . eight '
            ' . four . . nine '
            ' . two . . ten ';
            width: calc(100vh - 240px);
    }
//-----------------------------------------------------> CELTIC CROSS SPREADS
    .spread-thirteen-celtic-cross > section {
        grid-template-columns: 3fr 3fr 3fr 1fr 3fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        grid-template-areas: 
            ' eleven twelve thirteen . seven '
            ' . three . . eight '
            ' five one six . nine '
            ' . four . . ten '
            ' . two . . . ';
        margin-bottom: -20%;
        margin-top: -25px;
        width: calc(100vh - 240px);
    }
    .spread-ten-celtic-cross > section > div:nth-of-type(2),
    .spread-thirteen-celtic-cross > section > div:nth-of-type(2) {
        position: absolute;
        top: -200%;
        width: 100%;
        transform: rotate(90deg);
    }

    .spread-ten-celtic-cross > section > div:nth-of-type(7),
    .spread-ten-celtic-cross > section > div:nth-of-type(8),
    .spread-ten-celtic-cross > section > div:nth-of-type(9),
    .spread-ten-celtic-cross > section > div:nth-of-type(10),
    .spread-thirteen-celtic-cross > section > div:nth-of-type(7),
    .spread-thirteen-celtic-cross > section > div:nth-of-type(8),
    .spread-thirteen-celtic-cross > section > div:nth-of-type(9),
    .spread-thirteen-celtic-cross > section > div:nth-of-type(10) {
        width: 90%;
    }
    .spread-thirteen-celtic-cross > section > div:nth-of-type(11),
    .spread-thirteen-celtic-cross > section > div:nth-of-type(12),
    .spread-thirteen-celtic-cross > section > div:nth-of-type(13) {
        width: 80%!important;
        margin-top: 20%;
    }

    .spread-ten-celtic-cross > section > div:nth-of-type(7) {
        transform: translateY(0);
    }
    .spread-ten-celtic-cross > section > div:nth-of-type(8) {
        transform: translateY(-8%);
    }
    .spread-ten-celtic-cross > section > div:nth-of-type(9) {
        transform: translateY(-16%);
    }
    .spread-ten-celtic-cross > section > div:nth-of-type(10) {
        transform: translateY(-24%);
    }

    .spread-thirteen-celtic-cross > section > div:nth-of-type(7) {
        transform: translateY(16%);
    }   
    .spread-thirteen-celtic-cross > section > div:nth-of-type(8) {
        transform: translateY(8%);
    }
    .spread-thirteen-celtic-cross > section > div:nth-of-type(9) {
        transform: translateY(0%);
    }
    .spread-thirteen-celtic-cross > section > div:nth-of-type(10) {
        transform: translateY(-8%);
    }

    .spread-thirteen-celtic-cross > section > div:nth-of-type(12) {
        transform: translateX(-24%);
    }
    .spread-thirteen-celtic-cross > section > div:nth-of-type(13) {
        transform: translateX(-48%);
    }
`;