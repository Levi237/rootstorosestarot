import React, { Component } from 'react';
import styled from 'styled-components';
export default class Deck extends Component {
    render(){
        const { shuffle, selectCard } = this.props;

        const dealCards = shuffle.map((card, key) => {
            return (
                <div id={card.id} key={key} className="dealtCard shuffleDeck" onClick={(e) => selectCard(e)}>
                    <img alt="tarot card back" src="./deck/tab/back.jpg"/>
                </div>
            );
        });

        return (
            <Container id="deck-container">
            <h1 id="spread-header">pick your tarot layout</h1>
                <div id="displayContainer">
                    <div id="deckDisplay">
                        { shuffle.length > 0 ? dealCards : <div><img src="./deck/tab/back.jpg"/></div>}
                    </div>
                </div>
            </Container>
        );
    };
};

const Container = styled.div`
    width: 100vw;
    > h1 {
        margin: 60px auto 40px;
        font-family: var(--decorative-font);
        color: #fff;
        font-weight: 100;
        text-transform: uppercase;
    }
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
            width: 3280px;
            height: 157px;
            padding: 20px 10px;
            overflow: scroll;
            transition: all 3s ease;
            margin-left: -120%;
            margin-bottom: -40%;
            position: absolute;
            top: -100%;
            > div {
                width: 100px;
                display: inline-block;
                margin-left: -60px;
                &:first-of-type {
                    margin-left: 0;
                }
                > img {
                    width: 100%;
                }
            }
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