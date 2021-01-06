import React, { Component } from 'react';
import styled from 'styled-components';

export default class Deck extends Component {
    state = {
        deck: [
            {
                number: "00",
                title: "the fool",
            },{
                number: "01",
                title: "the magician",
            },{
                number: "02",
                title: "the high priestess",
            },{
                number: "03",
                title: "the empress",
            },{
                number: "04",
                title: "the emporer",
            },{
                number: "05",
                title: "the heirophant",
            },{
                number: "06",
                title: "the lovers",
            },{
                number: "07",
                title: "the chariot",
            },{
                number: "08",
                title: "strength",
            },{
                number: "09",
                title: "the hermit",
            },{
                number: "10",
                title: "wheel of fortune",
            },{
                number: "11",
                title: "justice",
            },{
                number: "12",
                title: "the hanged man",
            },{
                number: "13",
                title: "death",
            },{
                number: "14",
                title: "temperance",
            },{
                number: "15",
                title: "the devil",
            },{
                number: "16",
                title: "the tower",
            },{
                number: "17",
                title: "the star",
            },{
                number: "18",
                title: "the moon",
            },{
                number: "19",
                title: "the sun",
            },{
                number: "20",
                title: "judgement",
            },{
                number: "21",
                title: "the world",
            },{
                number: "22",
                title: "ace of wands",
            },{
                number: "23",
                title: "two of wands",
            },{
                number: "24",
                title: "three of wands",
            },{
                number: "25",
                title: "four of wands",
            },{
                number: "26",
                title: "five of wands",
            },{
                number: "27",
                title: "six of wands",
            },{
                number: "28",
                title: "seven of wands",
            },{
                number: "29",
                title: "eight of wands",
            },{
                number: "30",
                title: "nine of wands",
            },{
                number: "31",
                title: "ten of wands",
            },{
                number: "32",
                title: "page of wands",
            },{
                number: "33",
                title: "knight of wands",
            },{
                number: "34",
                title: "queen of wands",
            },{
                number: "35",
                title: "king of wands",
            },{
                number: "36",
                title: "ace of cups",
            },{
                number: "37",
                title: "two of cups",
            },{
                number: "38",
                title: "three of cups",
            },{
                number: "39",
                title: "four of cups",
            },{
                number: "40",
                title: "five of cups",
            },{
                number: "41",
                title: "six of cups",
            },{
                number: "42",
                title: "seven of cups",
            },{
                number: "43",
                title: "eight of cups",
            },{
                number: "44",
                title: "nine of cups",
            },{
                number: "45",
                title: "ten of cups",
            },{
                number: "46",
                title: "page of cups",
            },{
                number: "47",
                title: "knight of cups",
            },{
                number: "48",
                title: "queen of cups",
            },{
                number: "49",
                title: "king of cups",
            },{
                number: "50",
                title: "ace of swords",
            },{
                number: "51",
                title: "two of swords",
            },{
                number: "52",
                title: "three of swords",
            },{
                number: "53",
                title: "four of swords",
            },{
                number: "54",
                title: "five of swords",
            },{
                number: "55",
                title: "six of swords",
            },{
                number: "56",
                title: "seven of swords",
            },{
                number: "57",
                title: "eight of swords",
            },{
                number: "58",
                title: "nine of swords",
            },{
                number: "59",
                title: "ten of swords",
            },{
                number: "60",
                title: "page of swords",
            },{
                number: "61",
                title: "knight of swords",
            },{
                number: "62",
                title: "queen of swords",
            },{
                number: "63",
                title: "king of swords",
            },{
                number: "64",
                title: "ace of pentacles",
            },{
                number: "65",
                title: "two of pentacles",
            },{
                number: "66",
                title: "three of pentacles",
            },{
                number: "67",
                title: "four of pentacles",
            },{
                number: "68",
                title: "five of pentacles",
            },{
                number: "69",
                title: "six of pentacles",
            },{
                number: "70",
                title: "seven of pentacles",
            },{
                number: "71",
                title: "eight of pentacles",
            },{
                number: "72",
                title: "nine of pentacles",
            },{
                number: "73",
                title: "ten of pentacles",
            },{
                number: "74",
                title: "page of pentacles",
            },{
                number: "75",
                title: "knight of pentacles",
            },{
                number: "76",
                title: "queen of pentacles",
            },{
                number: "77",
                title: "king of pentacles",
            }
        ], 
        shuffle: []
    };

    shuffleThis = (e) => {
        let newDeck = [...this.state.deck];
        let shuffledDeck = [];
        // const shuffleBtn = document.getElementById('shuffle');
            // const reshuffleBtn = document.getElementById('reshuffle');
            while (newDeck.length > 0) {
                let index = Math.floor(Math.random() * newDeck.length);
                let card = newDeck[index];
                shuffledDeck.push(card);
                newDeck.splice(index, 1);
            };
            // shuffleBtn.style.display = "none";
            // reshuffleBtn.style.display = "inline-block";
            console.log(shuffledDeck, "<========shuffledDeck")
            // dealCards();
        this.setState({
          shuffle: [...shuffledDeck]
        });
      };

    render(){
        const { deck, shuffle } = this.state;

        // let newDeck = [...deck];
        // let shuffledDeck = [];

        // const shuffleCards = () => {
        //     const shuffleBtn = document.getElementById('shuffle');
        //     const reshuffleBtn = document.getElementById('reshuffle');
        //     while (newDeck.length > 0) {
        //         let index = Math.floor(Math.random() * newDeck.length);
        //         let card = newDeck[index];
        //         shuffledDeck.push(card);
        //         newDeck.splice(index, 1);
        //     };
        //     shuffleBtn.style.display = "none";
        //     reshuffleBtn.style.display = "inline-block";
        //     console.log(shuffledDeck, "<========shuffledDeck")
        //     dealCards();
        // };
        // const reshuffleCards = () => {
        //     const container = document.getElementById('deckDisplay');
        //     container.innerHTML = `<div></div>`;
        //     newDeck = [...shuffledDeck];
        //     clearDeck();
        //     shuffleCards();
        //     dealCards();
        // };
        


        // const clearDeck = () => {
        //     const container = document.getElementById('deckDisplay');
        //     const shuffleBtn = document.getElementById('shuffle');
        //     const reshuffleBtn = document.getElementById('reshuffle');
        //     while (shuffledDeck.length > 0) {
        //         shuffledDeck = [];
        //         newDeck = [...deck];
        //         container.innerHTML = "";
        //     };
        //     shuffleBtn.style.display = "inline-block";
        //     reshuffleBtn.style.display = "none";
        // };
        // const dealCards = () => {
        //     const container = document.getElementById('deckDisplay');
        //     container.innerHTML = "";
const dealCards = shuffle.map((card, key) => {
        //         console.log("dealcards clicked")
        //         container.innerHTML += `<div id="${card.number}" key=${key} class="dealtCard"><img src="./deck/tab/back.jpg"/></div>`;
        //         // if (shuffledDeck) {
 return (
     <div id={card.number} key={key} class="dealtCard">
         <img src="./deck/tab/back.jpg" onClick="saveCard"/>
     </div>
 );
                
        //     // }
        //         //onClick push ID to const hand = [];
            });
        // }
        
        return (
            <Container>
                <h1>DECK DISPLAY</h1>
                <button id="shuffle" onClick={this.shuffleThis}>
                    Shuffle
                </button>
                {/* <button id="reshuffle" onClick={reshuffleCards}>
                    Reshuffle
                </button>
                <button id="clear" onClick={clearDeck}>
                    Clear
                </button> */}
                <div>

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
    > div:first-of-type {
        width: 100vw;
        overflow: scroll;

        div#deckDisplay {
            width: 3978px;
            height: 280px;
            padding-top: 50px;
            overflow: scroll;
          }
    }
`;