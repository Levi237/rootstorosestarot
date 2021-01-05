

// Create Deck Object Array

import React, { Component } from 'react';
export default class Deck extends Component {
    state = {
        deck: {
            cardOne: {
                title: "card one",
                image: "😬",
                info: "blah blah blah blah blah blah blah blah blah"
            },
            cardTwo: {
                title: "card one",
                image: "😊",
                info: "blah blah blah blah blah blah blah blah blah"
            },
            cardThree: {
                title: "card one",
                image: "😎",
                info: "blah blah blah blah blah blah blah blah blah"
            },
            cardFour: {
                title: "card one",
                image: "🤗",
                info: "blah blah blah blah blah blah blah blah blah"
            }
        }
    }
    render(){
        const shuffledDeck = [];

        const shuffleCards = ()  => {
            while (this.state.deck.length > 0) {
                let index = Math.floor(Math.random() * deck.length);
                let card = deck[index];
                shuffledDeck.push(card);
                deck.splice(index, 1);
            }
        }
        return (<>
        <div id="deckDisplay">
            
        </div>
        <button onClick={shuffleCards}>Deal Deck</button>
        
        </>);
    };
};