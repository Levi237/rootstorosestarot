import React, { Component } from 'react';
import styled from 'styled-components';
export default class Deck extends Component {

    render(){
        const { shuffle, shuffleThis, selectCard } = this.props;

        // const deal = document.getElementsByClassName("dealDeck");
        // while ( deal.length > 0) {
        //     console.log(deal.length, "deal")
        //     setTimeout(function(){deal[0].classList.remove('dealDeck')}, 1000);
        //     document.getElementsByClassName("dealDeck").classList.remove("dealDeck")
        // }

        const dealCards = shuffle.map((card, key) => {
            return (
                <div id={card.id} key={key} className="dealtCard" onClick={(e) => selectCard(e)}>
                    <img alt="tarot card back" src="./deck/tab/back.jpg"/>
                </div>
            );
        });

        return (
            <Container id="deck-container">
                <section id="shuffle">
                    <button onClick={(e) => shuffleThis(e)}>
                        Shuffle
                    </button>
                </section>
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
    > section {
        text-align: center;
        position: absolute;
        z-index: 900;
        top: calc(40px + 17vw);
        width: 100vw;
    }
    width: 100vw;
    div#displayContainer {
        width: 100vw;
        overflow: scroll;
        div#deckDisplay {
            width: 3280px;
            height: 157px;
            padding: 20px 10px;
            overflow: scroll;
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
    @media screen and (max-width: 900px) {
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