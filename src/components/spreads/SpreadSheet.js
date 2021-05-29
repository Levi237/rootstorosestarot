import React, { Component } from 'react';
import styled               from 'styled-components';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
export default class SpreadSheet extends Component {

    saveHand = async () => {
        const { hand, selectSpread } = this.props;
        const newFromDB = await firebase.firestore().collection('spreads').add({
                hand: hand,
                spread: selectSpread,
                uid: firebase.auth().currentUser.uid,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        return newFromDB
    };

    render(){
        const { hand, selectSpread, showSpreadLayouts } = this.props;

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
        const showInfo = hand.map((h, k) => {
            return (
                <li key={k} >
                    <span>
                        #{h.id}: {h.title}
                    </span>
                </li>
            );
        });
        return(
            <LocalWrapper id="spreadsheet-container">
                <div>
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
                </div>
                <div>
                    <InfoContainer>
                        <h2>{selectSpread.name}</h2>
                        <ol>
                            {showInfo}
                        </ol>
                        <div>
                            <section id="restart">
                                <button className="purpleBtn" onClick={(e) => showSpreadLayouts(e)}>
                                    Close
                                </button>
                            </section>
                            <section id="save">
                                <button className="purpleBtn" onClick={() => {this.saveHand();}}>
                                    Save
                                </button>
                            </section>
                        </div>
                    </InfoContainer>
                </div>
            </LocalWrapper>
        );
    };
};
const InfoContainer = styled.div`
    width: 90%;
    max-height: 640px;
    padding-bottom: 80px;
    background-color: #fff!important;
    font-family: var(--decorative-font);
    position: relative;
    text-align: center;
    h2 {
        color: var(--purple);
        padding: 30px 0 0;
        font-size: 32px;
        text-transform: capitalize;
    }
    ol {
        margin-left: 20px;
        text-align: left;
        li {
            font-family: var(--decorative-font);
            color: var(--green);
            span {
                color: var(--purple);
                font-size: 120%;
                vertical-align: middle;
                line-height: 200%;
            }
        }
    }
    > div:last-of-type {
        position: absolute;
        bottom: 20px;
        width: 100%;
    }
    #restart,
    #save {
        display: inline-block;
        margin: 0 10px;
        button {
            margin: 10px auto 0;
            padding: 10px 36px;
            font-size: 20px;
        }
    }
    @media only screen and (max-width: 640px) {
        margin: 40px auto;
    }
`;

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
    margin: 20px auto;
    position: relative;
    display: none;
    grid-template-columns: calc(100% - 360px) 360px;
    grid-template-rows: 100%;
    grid-template-areas: ' spread info ';
    > div {
        position: relative;
        display: inline-block;
        &:first-of-type {
            grid-area: spread;
        }
        &:last-of-type {
            grid-area: info;
        }
    }
    @media only screen and (max-width: 640px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        grid-template-areas: ' spread ' ' info ';
    }
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
            max-width: 600px;
    }
    .spread-ten-celtic-cross > section {
        grid-template-columns: 3fr 3fr 3fr 1fr 3fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas: 
            ' . three . . seven '
            ' five one six . eight '
            ' . four . . nine '
            ' . two . . ten ';
            max-width: 500px;
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
        max-width: 500px;
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
    .spread-thirteen-celtic-cross > section > div:nth-of-type(10),
    .spread-thirteen-celtic-cross > section > div:nth-of-type(11),
    .spread-thirteen-celtic-cross > section > div:nth-of-type(12),
    .spread-thirteen-celtic-cross > section > div:nth-of-type(13) {
        width: 90%;
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