import React, { Component } from 'react';
import styled from 'styled-components';
export default class Deck extends Component {
    render(){
        const { shuffle, selectCard } = this.props;

        const dealCards = shuffle.map((card, key) => {
            return (
                <div id={card.id} key={key} className="dealtCard shuffleDeck" onClick={(e) => selectCard(e)}>
                    <img alt="tarot card back" src="./deck/tab/back.png"/>
                </div>
            );
        });

        return (
            <Container id="deck-container">
                <div id="displayContainer">
                    <div id="deckDisplay">
                        { shuffle.length > 0 ? dealCards : <div><img src="./deck/tab/back.png" alt="deck back"/></div>}
                    </div>
                </div>
            </Container>
        );
    };
};

const Container = styled.div`
    width: 100vw;
    > section {
        text-align: right;
        position: absolute;
        right: 5vw;
        z-index: 900;
        top: 5vw;
        width: 100vw;
    }
    div#displayContainer {
        width: 100vw;
        overflow: scroll;
        div#deckDisplay {
            width: calc(30px * 78 + 42px);
            height: calc(72px * 1.57);
            padding: 18px 10px;
            overflow: scroll;
            transition: all 3s ease;
            margin-left: -120%;
            margin-bottom: -40%;
            position: absolute;
            top: -100%;
            > div {
                width: 72px;
                display: inline-block;
                margin-left: -42px;
                &:first-of-type {
                    margin-left: 0;
                }
                > img {
                    width: 100%;
                }
            }
        }
        img {
            pointer-events: none;
        }
    }
    @media screen and (max-width: 640px) {
        > section {
            text-align: right;
            right: 5px;
            top: 5px;
        }
        div#displayContainer {
            div#deckDisplay {
                width: calc(405vw + 1px)!important;
                height: 31vw!important;
                padding: 5vw 2.5vw!important;
                > div {
                    width: 20vw;
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