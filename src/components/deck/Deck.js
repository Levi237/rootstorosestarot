import React, { Component } from 'react';

export default class Deck extends Component {
    state = {
        deck: [
            {
                title: "card one",
                image: "😬",
                info: "one blah blah blah blah blah blah blah blah"
            },{
                title: "card two",
                image: "😊",
                info: "two blah blah blah blah blah blah blah blah"
            },{
                title: "card three",
                image: "😎",
                info: "three blah blah blah blah blah blah blah blah"
            },{
                title: "card four",
                image: "🤗",
                info: "four blah blah blah blah blah blah blah blah"
            }
            ]
    };
    render(){
        const { deck } = this.state;
        let newDeck = [...deck];
        let shuffledDeck = [];

        const shuffleCards = () => {
            while (newDeck.length > 0) {
                let index = Math.floor(Math.random() * newDeck.length);
                let card = newDeck[index];
                shuffledDeck.push(card);
                newDeck.splice(index, 1);
            };
            dealCards();
            console.log(shuffledDeck, "shuffled cards")
        };
        const shuffleAgain = () => {
            newDeck = [...shuffledDeck];
            clearDeck();
            shuffleCards();
            dealCards();
            console.log(shuffledDeck, "shuffled again")
        };
        
        const dealCards = () => {
            const container = document.getElementById('deckDisplay');
            console.log(container, "container")
            container.innerHTML = `<div><h2>${shuffledDeck[0].title}</h2></div>`;
            console.log(shuffledDeck, "deal deck", deck, "<--- deck")
        }
        // const shuffleDealCards = () => {
        //     shuffleCards();
        //     dealCards();
        //     // console.log(shuffledDeck, "shuffledDeck");
        // };
        const clearDeck = () => {
            const container = document.getElementById('deckDisplay');
            while (shuffledDeck.length > 0) {
                shuffledDeck = [];
                container.innerHTML = `<div><h2>empty</h2></div>`;
            }
            console.log(shuffledDeck, "clearDeck");
        };
        return (
            <>
                <h1>DECK DISPLAY</h1>
                <div id="deckDisplay">
                    <div><h2>landing</h2></div>
                </div>
                <button onClick={shuffleCards}>
                    Shuffle Deck
                </button>
                <button onClick={dealCards}>
                    Deal Deck
                </button>
                <button onClick={shuffleAgain}>
                    shuffleAgain
                </button>
                <button onClick={clearDeck}>
                    Clear
                </button>
            </>
        );
    };
};