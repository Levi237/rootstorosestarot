

// Create Deck Object Array

import React, { Component } from 'react';

export default class Deck extends Component {
    state = {
        deck: [{
            cardOne: {
                title: "card one",
                image: "😬",
                info: "one blah blah blah blah blah blah blah blah"
            },
            cardTwo: {
                title: "card two",
                image: "😊",
                info: "two blah blah blah blah blah blah blah blah"
            },
            cardThree: {
                title: "card three",
                image: "😎",
                info: "three blah blah blah blah blah blah blah blah"
            },
            cardFour: {
                title: "card four",
                image: "🤗",
                info: "four blah blah blah blah blah blah blah blah"
            }
        }]
    };
    render(){
        const { deck } = this.state;
        const shuffledDeck = [];

        const shuffleCards = ()  => {
            while (deck.length > 0) {
                let index = Math.floor(Math.random() * deck.length);
                let card = deck[index];
                shuffledDeck.push(card);
                deck.splice(index, 1);
            };
        };
        const dealCards = () => {
            let container = document.getElementById('deckDisplay')
            container.innerHTML = `<div><h2>${shuffledDeck[0].cardOne.title}</h2></div>`
        }
        const shuffleDealCards = () => {
            shuffleCards();
            dealCards();
        }
        return (
            <>
                <h1>DECK DISPLAY</h1>
                <div id="deckDisplay">
                    
                </div>
                <button onClick={shuffleDealCards}>
                    Deal Deck
                </button>
            </>
        );
    };
};