import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Spreads from '../spreads/Spreads';
export default class Deck extends Component {
    state = {
        // deck: [
        //     {
        //         id: "00",
        //         title: "the fool",
        //         content: "blah blah blah"
        //     },{
        //         id: "01",
        //         title: "the magician",
        //         content: "blah blah blah"
        //     },{
        //         id: "02",
        //         title: "the high priestess",
        //         content: "blah blah blah"
        //     },{
        //         id: "03",
        //         title: "the empress",
        //         content: "blah blah blah"
        //     },{
        //         id: "04",
        //         title: "the emporer",
        //         content: "blah blah blah"
        //     },{
        //         id: "05",
        //         title: "the heirophant",
        //         content: "blah blah blah"
        //     },{
        //         id: "06",
        //         title: "the lovers",
        //         content: "blah blah blah"
        //     },{
        //         id: "07",
        //         title: "the chariot",
        //         content: "blah blah blah"
        //     },{
        //         id: "08",
        //         title: "strength",
        //         content: "blah blah blah"
        //     },{
        //         id: "09",
        //         title: "the hermit",
        //         content: "blah blah blah"
        //     },{
        //         id: "10",
        //         title: "wheel of fortune",
        //         content: "blah blah blah"
        //     },{
        //         id: "11",
        //         title: "justice",
        //         content: "blah blah blah"
        //     },{
        //         id: "12",
        //         title: "the hanged man",
        //         content: "blah blah blah"
        //     },{
        //         id: "13",
        //         title: "death",
        //         content: "blah blah blah"
        //     },{
        //         id: "14",
        //         title: "temperance",
        //         content: "blah blah blah"
        //     },{
        //         id: "15",
        //         title: "the devil",
        //         content: "blah blah blah"
        //     },{
        //         id: "16",
        //         title: "the tower",
        //         content: "blah blah blah"
        //     },{
        //         id: "17",
        //         title: "the star",
        //         content: "blah blah blah"
        //     },{
        //         id: "18",
        //         title: "the moon",
        //         content: "blah blah blah"
        //     },{
        //         id: "19",
        //         title: "the sun",
        //         content: "blah blah blah"
        //     },{
        //         id: "20",
        //         title: "judgement",
        //         content: "blah blah blah"
        //     },{
        //         id: "21",
        //         title: "the world",
        //         content: "blah blah blah"
        //     },{
        //         id: "22",
        //         title: "ace of wands",
        //         content: "blah blah blah"
        //     },{
        //         id: "23",
        //         title: "two of wands",
        //         content: "blah blah blah"
        //     },{
        //         id: "24",
        //         title: "three of wands",
        //         content: "blah blah blah"
        //     },{
        //         id: "25",
        //         title: "four of wands",
        //         content: "blah blah blah"
        //     },{
        //         id: "26",
        //         title: "five of wands",
        //         content: "blah blah blah"
        //     },{
        //         id: "27",
        //         title: "six of wands",
        //         content: "blah blah blah"
        //     },{
        //         id: "28",
        //         title: "seven of wands",
        //         content: "blah blah blah"
        //     },{
        //         id: "29",
        //         title: "eight of wands",
        //         content: "blah blah blah"
        //     },{
        //         id: "30",
        //         title: "nine of wands",
        //         content: "blah blah blah"
        //     },{
        //         id: "31",
        //         title: "ten of wands",
        //         content: "blah blah blah"
        //     },{
        //         id: "32",
        //         title: "page of wands",
        //         content: "blah blah blah"
        //     },{
        //         id: "33",
        //         title: "knight of wands",
        //         content: "blah blah blah"
        //     },{
        //         id: "34",
        //         title: "queen of wands",
        //         content: "blah blah blah"
        //     },{
        //         id: "35",
        //         title: "king of wands",
        //         content: "blah blah blah"
        //     },{
        //         id: "36",
        //         title: "ace of cups",
        //         content: "blah blah blah"
        //     },{
        //         id: "37",
        //         title: "two of cups",
        //         content: "blah blah blah"
        //     },{
        //         id: "38",
        //         title: "three of cups",
        //         content: "blah blah blah"
        //     },{
        //         id: "39",
        //         title: "four of cups",
        //         content: "blah blah blah"
        //     },{
        //         id: "40",
        //         title: "five of cups",
        //         content: "blah blah blah"
        //     },{
        //         id: "41",
        //         title: "six of cups",
        //         content: "blah blah blah"
        //     },{
        //         id: "42",
        //         title: "seven of cups",
        //         content: "blah blah blah"
        //     },{
        //         id: "43",
        //         title: "eight of cups",
        //         content: "blah blah blah"
        //     },{
        //         id: "44",
        //         title: "nine of cups",
        //         content: "blah blah blah"
        //     },{
        //         id: "45",
        //         title: "ten of cups",
        //         content: "blah blah blah"
        //     },{
        //         id: "46",
        //         title: "page of cups",
        //         content: "blah blah blah"
        //     },{
        //         id: "47",
        //         title: "knight of cups",
        //         content: "blah blah blah"
        //     },{
        //         id: "48",
        //         title: "queen of cups",
        //         content: "blah blah blah"
        //     },{
        //         id: "49",
        //         title: "king of cups",
        //         content: "blah blah blah"
        //     },{
        //         id: "50",
        //         title: "ace of swords",
        //         content: "blah blah blah"
        //     },{
        //         id: "51",
        //         title: "two of swords",
        //         content: "blah blah blah"
        //     },{
        //         id: "52",
        //         title: "three of swords",
        //         content: "blah blah blah"
        //     },{
        //         id: "53",
        //         title: "four of swords",
        //         content: "blah blah blah"
        //     },{
        //         id: "54",
        //         title: "five of swords",
        //         content: "blah blah blah"
        //     },{
        //         id: "55",
        //         title: "six of swords",
        //         content: "blah blah blah"
        //     },{
        //         id: "56",
        //         title: "seven of swords",
        //         content: "blah blah blah"
        //     },{
        //         id: "57",
        //         title: "eight of swords",
        //         content: "blah blah blah"
        //     },{
        //         id: "58",
        //         title: "nine of swords",
        //         content: "blah blah blah"
        //     },{
        //         id: "59",
        //         title: "ten of swords",
        //         content: "blah blah blah"
        //     },{
        //         id: "60",
        //         title: "page of swords",
        //         content: "blah blah blah"
        //     },{
        //         id: "61",
        //         title: "knight of swords",
        //         content: "blah blah blah"
        //     },{
        //         id: "62",
        //         title: "queen of swords",
        //         content: "blah blah blah"
        //     },{
        //         id: "63",
        //         title: "king of swords",
        //         content: "blah blah blah"
        //     },{
        //         id: "64",
        //         title: "ace of pentacles",
        //         content: "blah blah blah"
        //     },{
        //         id: "65",
        //         title: "two of pentacles",
        //         content: "blah blah blah"
        //     },{
        //         id: "66",
        //         title: "three of pentacles",
        //         content: "blah blah blah"
        //     },{
        //         id: "67",
        //         title: "four of pentacles",
        //         content: "blah blah blah"
        //     },{
        //         id: "68",
        //         title: "five of pentacles",
        //         content: "blah blah blah"
        //     },{
        //         id: "69",
        //         title: "six of pentacles",
        //         content: "blah blah blah"
        //     },{
        //         id: "70",
        //         title: "seven of pentacles",
        //         content: "blah blah blah"
        //     },{
        //         id: "71",
        //         title: "eight of pentacles",
        //         content: "blah blah blah"
        //     },{
        //         id: "72",
        //         title: "nine of pentacles",
        //         content: "blah blah blah"
        //     },{
        //         id: "73",
        //         title: "ten of pentacles",
        //         content: "blah blah blah"
        //     },{
        //         id: "74",
        //         title: "page of pentacles",
        //         content: "blah blah blah"
        //     },{
        //         id: "75",
        //         title: "knight of pentacles",
        //         content: "blah blah blah"
        //     },{
        //         id: "76",
        //         title: "queen of pentacles",
        //         content: "blah blah blah"
        //     },{
        //         id: "77",
        //         title: "king of pentacles",
        //         content: "blah blah blah"
        //     }
        // ], 
        // spreads: [
        //     {
        //         name: "three",
        //         image: "./spread/three.png",
        //         length: 3
        //     },{
        //         name: "cross",
        //         image: "./spread/cross.png",
        //         length: 5
        //     },{
        //         name: "celtic cross",
        //         image: "./spread/cross.png",
        //         length: 10
        //     }
        // ],
        // shuffle: [],
        // selectCards: [],
        // hand: [],
        // selectSpread: "",
        // spreadLength: 3
    };




    render(){
        const { shuffle, spreads, shuffleThis, selectCard } = this.props;

        // const hand = [];
        // selectCard.map(s => {
        //     deck.filter(d => {
        //         if ( s === d.id ) {
        //             this.setState({
        //                 hand: [...hand, d]
        //             })
        //             // 
        //         };
        //     });
        // });
        const dealCards = shuffle.map((card, key) => {
            return (
                <div id={card.id} key={key} className="dealtCard" onClick={(e) => selectCard(e)}>
                    <img src="./deck/tab/back.jpg"/>
                </div>
            );
        });

        return (
            <Container>
                <h1>DECK DISPLAY</h1>
                <button id="shuffle" onClick={(e) => shuffleThis(e)}>
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