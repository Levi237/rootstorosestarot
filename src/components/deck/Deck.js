import React, { Component } from 'react';
import styled from 'styled-components';

import ThreeSpread from './spreads/Three';
import CrossSpread from './spreads/Cross';

export default class Deck extends Component {
    state = {
        deck: [
            {
                number: "00",
                title: "the fool",
                content: "blah blah blah"
            },{
                number: "01",
                title: "the magician",
                content: "blah blah blah"
            },{
                number: "02",
                title: "the high priestess",
                content: "blah blah blah"
            },{
                number: "03",
                title: "the empress",
                content: "blah blah blah"
            },{
                number: "04",
                title: "the emporer",
                content: "blah blah blah"
            },{
                number: "05",
                title: "the heirophant",
                content: "blah blah blah"
            },{
                number: "06",
                title: "the lovers",
                content: "blah blah blah"
            },{
                number: "07",
                title: "the chariot",
                content: "blah blah blah"
            },{
                number: "08",
                title: "strength",
                content: "blah blah blah"
            },{
                number: "09",
                title: "the hermit",
                content: "blah blah blah"
            },{
                number: "10",
                title: "wheel of fortune",
                content: "blah blah blah"
            },{
                number: "11",
                title: "justice",
                content: "blah blah blah"
            },{
                number: "12",
                title: "the hanged man",
                content: "blah blah blah"
            },{
                number: "13",
                title: "death",
                content: "blah blah blah"
            },{
                number: "14",
                title: "temperance",
                content: "blah blah blah"
            },{
                number: "15",
                title: "the devil",
                content: "blah blah blah"
            },{
                number: "16",
                title: "the tower",
                content: "blah blah blah"
            },{
                number: "17",
                title: "the star",
                content: "blah blah blah"
            },{
                number: "18",
                title: "the moon",
                content: "blah blah blah"
            },{
                number: "19",
                title: "the sun",
                content: "blah blah blah"
            },{
                number: "20",
                title: "judgement",
                content: "blah blah blah"
            },{
                number: "21",
                title: "the world",
                content: "blah blah blah"
            },{
                number: "22",
                title: "ace of wands",
                content: "blah blah blah"
            },{
                number: "23",
                title: "two of wands",
                content: "blah blah blah"
            },{
                number: "24",
                title: "three of wands",
                content: "blah blah blah"
            },{
                number: "25",
                title: "four of wands",
                content: "blah blah blah"
            },{
                number: "26",
                title: "five of wands",
                content: "blah blah blah"
            },{
                number: "27",
                title: "six of wands",
                content: "blah blah blah"
            },{
                number: "28",
                title: "seven of wands",
                content: "blah blah blah"
            },{
                number: "29",
                title: "eight of wands",
                content: "blah blah blah"
            },{
                number: "30",
                title: "nine of wands",
                content: "blah blah blah"
            },{
                number: "31",
                title: "ten of wands",
                content: "blah blah blah"
            },{
                number: "32",
                title: "page of wands",
                content: "blah blah blah"
            },{
                number: "33",
                title: "knight of wands",
                content: "blah blah blah"
            },{
                number: "34",
                title: "queen of wands",
                content: "blah blah blah"
            },{
                number: "35",
                title: "king of wands",
                content: "blah blah blah"
            },{
                number: "36",
                title: "ace of cups",
                content: "blah blah blah"
            },{
                number: "37",
                title: "two of cups",
                content: "blah blah blah"
            },{
                number: "38",
                title: "three of cups",
                content: "blah blah blah"
            },{
                number: "39",
                title: "four of cups",
                content: "blah blah blah"
            },{
                number: "40",
                title: "five of cups",
                content: "blah blah blah"
            },{
                number: "41",
                title: "six of cups",
                content: "blah blah blah"
            },{
                number: "42",
                title: "seven of cups",
                content: "blah blah blah"
            },{
                number: "43",
                title: "eight of cups",
                content: "blah blah blah"
            },{
                number: "44",
                title: "nine of cups",
                content: "blah blah blah"
            },{
                number: "45",
                title: "ten of cups",
                content: "blah blah blah"
            },{
                number: "46",
                title: "page of cups",
                content: "blah blah blah"
            },{
                number: "47",
                title: "knight of cups",
                content: "blah blah blah"
            },{
                number: "48",
                title: "queen of cups",
                content: "blah blah blah"
            },{
                number: "49",
                title: "king of cups",
                content: "blah blah blah"
            },{
                number: "50",
                title: "ace of swords",
                content: "blah blah blah"
            },{
                number: "51",
                title: "two of swords",
                content: "blah blah blah"
            },{
                number: "52",
                title: "three of swords",
                content: "blah blah blah"
            },{
                number: "53",
                title: "four of swords",
                content: "blah blah blah"
            },{
                number: "54",
                title: "five of swords",
                content: "blah blah blah"
            },{
                number: "55",
                title: "six of swords",
                content: "blah blah blah"
            },{
                number: "56",
                title: "seven of swords",
                content: "blah blah blah"
            },{
                number: "57",
                title: "eight of swords",
                content: "blah blah blah"
            },{
                number: "58",
                title: "nine of swords",
                content: "blah blah blah"
            },{
                number: "59",
                title: "ten of swords",
                content: "blah blah blah"
            },{
                number: "60",
                title: "page of swords",
                content: "blah blah blah"
            },{
                number: "61",
                title: "knight of swords",
                content: "blah blah blah"
            },{
                number: "62",
                title: "queen of swords",
                content: "blah blah blah"
            },{
                number: "63",
                title: "king of swords",
                content: "blah blah blah"
            },{
                number: "64",
                title: "ace of pentacles",
                content: "blah blah blah"
            },{
                number: "65",
                title: "two of pentacles",
                content: "blah blah blah"
            },{
                number: "66",
                title: "three of pentacles",
                content: "blah blah blah"
            },{
                number: "67",
                title: "four of pentacles",
                content: "blah blah blah"
            },{
                number: "68",
                title: "five of pentacles",
                content: "blah blah blah"
            },{
                number: "69",
                title: "six of pentacles",
                content: "blah blah blah"
            },{
                number: "70",
                title: "seven of pentacles",
                content: "blah blah blah"
            },{
                number: "71",
                title: "eight of pentacles",
                content: "blah blah blah"
            },{
                number: "72",
                title: "nine of pentacles",
                content: "blah blah blah"
            },{
                number: "73",
                title: "ten of pentacles",
                content: "blah blah blah"
            },{
                number: "74",
                title: "page of pentacles",
                content: "blah blah blah"
            },{
                number: "75",
                title: "knight of pentacles",
                content: "blah blah blah"
            },{
                number: "76",
                title: "queen of pentacles",
                content: "blah blah blah"
            },{
                number: "77",
                title: "king of pentacles",
                content: "blah blah blah"
            }
        ], 
        shuffle: [],
        select: [],
        spreadLength: 5
    };

    shuffleThis = () => {
        let newDeck = [...this.state.deck];
        let shuffledDeck = [];
        while (newDeck.length > 0) {
            let index = Math.floor(Math.random() * newDeck.length);
            let card = newDeck[index];
            shuffledDeck.push(card);
            newDeck.splice(index, 1);
        };
        this.setState({
          shuffle: [...shuffledDeck]
        });
    };
    selectThis = (e) => {
        const { select, spreadLength } = this.state;
        const t = e.currentTarget.id;
        document.getElementById("shuffle").style.display = "none";
        if (select.length < spreadLength) {
            this.setState({
                select: [...select, t]
            })
            document.getElementById(t).style.display = "none";
        }
    }

    render(){
        const { deck, shuffle, select } = this.state;

        const hand = []

        select.map(s => {
            deck.filter(d => {
                if ( s === d.number ) {
                    hand.push(d);
                }
            })
        })
        const dealCards = shuffle.map((card, key) => {
            return (
                <div id={card.number} key={key} className="dealtCard" onClick={(e) => this.selectThis(e)}>
                    <img src="./deck/tab/back.jpg"/>
                </div>
            );
        });
 
        return (
            <Container>
                <h1>DECK DISPLAY</h1>
                <CrossSpread hand={hand} />
                <button id="shuffle" onClick={this.shuffleThis}>
                    Shuffle
                </button>
                {/* <button id="clear" onClick={clearDeck}>
                    Clear
                </button> */}
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