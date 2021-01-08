import React, { Component } from 'react';
import styled from 'styled-components';
export default class Deck extends Component {

    render(){
        const { shuffle, shuffleThis, selectCard } = this.props;

        const dealCards = shuffle.map((card, key) => {
            return (
                <div id={card.id} key={key} className="dealtCard" onClick={(e) => selectCard(e)}>
                    <img src="./deck/tab/back.jpg"/>
                </div>
            );
        });

        return (
            <Container id="deck-container">
                <h1>DECK DISPLAY</h1>
                <button id="shuffle" onClick={(e) => shuffleThis(e)}>
                    Shuffle
                </button>
                <div id="displayContainer">
                    <div id="deckDisplay">
                        { dealCards }
                    </div>
                </div>
            </Container>
        );
    };
};

const Container = styled.div`
    width: 100vw;
    div#displayContainer {
        width: 100vw;
        overflow: scroll;

        div#deckDisplay {
            width: 3280px;
            height: 280px;
            padding-top: 50px;
            padding-left: 20px;
            overflow: scroll;
            > div {
                width: 60px;
                display: inline-block;
                margin-left: -20px;
                &:first-of-type {
                    margin-left: 0;
                }
            }
        }
    }
    @media screen and (max-width: 900px) {
        div#displayContainer {
            div#deckDisplay {
                width: 800vw!important;
                height: 50vw!important;
                padding-top: 10vw!important;
                padding-left: 5vw!important;
                > div {
                    width: 25vw;
                    display: inline-block;
                    margin-left: -15vw;
                    &:first-of-type {
                        margin-left: 0;
                    }
                    > img {
                        width: 100%;
                    }
                }
            }
        }
    }
`;