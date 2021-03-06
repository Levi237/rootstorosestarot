import React, { Component } from 'react';
import styled               from 'styled-components';
// import { Switch, Route }    from 'react-router-dom';
// import * as routes          from './constants/routes';

import Header               from './components/Header';
import Deck                 from './components/deck/Deck';
import Spreads              from './components/spreads';
import SpreadSheet          from './components/spreads/SpreadSheet';

export default class App extends Component {
  state = {
    deck: [
      {
          id: "00",
          rotation: 0,
          title: "the fool",
          content: "blah blah blah"
      },{
          id: "01",
          rotation: 0,
          title: "the magician",
          content: "blah blah blah"
      },{
          id: "02",
          rotation: 0,
          title: "the high priestess",
          content: "blah blah blah"
      },{
          id: "03",
          rotation: 0,
          title: "the empress",
          content: "blah blah blah"
      },{
          id: "04",
          rotation: 0,
          title: "the emporer",
          content: "blah blah blah"
      },{
          id: "05",
          rotation: 0,
          title: "the heirophant",
          content: "blah blah blah"
      },{
          id: "06",
          rotation: 0,
          title: "the lovers",
          content: "blah blah blah"
      },{
          id: "07",
          rotation: 0,
          title: "the chariot",
          content: "blah blah blah"
      },{
          id: "08",
          rotation: 0,
          title: "strength",
          content: "blah blah blah"
      },{
          id: "09",
          rotation: 0,
          title: "the hermit",
          content: "blah blah blah"
      },{
          id: "10",
          rotation: 0,
          title: "wheel of fortune",
          content: "blah blah blah"
      },{
          id: "11",
          rotation: 0,
          title: "justice",
          content: "blah blah blah"
      },{
          id: "12",
          rotation: 0,
          title: "the hanged man",
          content: "blah blah blah"
      },{
          id: "13",
          rotation: 0,
          title: "death",
          content: "blah blah blah"
      },{
          id: "14",
          rotation: 0,
          title: "temperance",
          content: "blah blah blah"
      },{
          id: "15",
          rotation: 0,
          title: "the devil",
          content: "blah blah blah"
      },{
          id: "16",
          rotation: 0,
          title: "the tower",
          content: "blah blah blah"
      },{
          id: "17",
          rotation: 0,
          title: "the star",
          content: "blah blah blah"
      },{
          id: "18",
          rotation: 0,
          title: "the moon",
          content: "blah blah blah"
      },{
          id: "19",
          rotation: 0,
          title: "the sun",
          content: "blah blah blah"
      },{
          id: "20",
          rotation: 0,
          title: "judgement",
          content: "blah blah blah"
      },{
          id: "21",
          rotation: 0,
          title: "the world",
          content: "blah blah blah"
      },{
          id: "22",
          rotation: 0,
          title: "ace of wands",
          content: "blah blah blah"
      },{
          id: "23",
          rotation: 0,
          title: "two of wands",
          content: "blah blah blah"
      },{
          id: "24",
          rotation: 0,
          title: "three of wands",
          content: "blah blah blah"
      },{
          id: "25",
          rotation: 0,
          title: "four of wands",
          content: "blah blah blah"
      },{
          id: "26",
          rotation: 0,
          title: "five of wands",
          content: "blah blah blah"
      },{
          id: "27",
          rotation: 0,
          title: "six of wands",
          content: "blah blah blah"
      },{
          id: "28",
          rotation: 0,
          title: "seven of wands",
          content: "blah blah blah"
      },{
          id: "29",
          rotation: 0,
          title: "eight of wands",
          content: "blah blah blah"
      },{
          id: "30",
          rotation: 0,
          title: "nine of wands",
          content: "blah blah blah"
      },{
          id: "31",
          rotation: 0,
          title: "ten of wands",
          content: "blah blah blah"
      },{
          id: "32",
          rotation: 0,
          title: "page of wands",
          content: "blah blah blah"
      },{
          id: "33",
          rotation: 0,
          title: "knight of wands",
          content: "blah blah blah"
      },{
          id: "34",
          rotation: 0,
          title: "queen of wands",
          content: "blah blah blah"
      },{
          id: "35",
          rotation: 0,
          title: "king of wands",
          content: "blah blah blah"
      },{
          id: "36",
          rotation: 0,
          title: "ace of cups",
          content: "blah blah blah"
      },{
          id: "37",
          rotation: 0,
          title: "two of cups",
          content: "blah blah blah"
      },{
          id: "38",
          rotation: 0,
          title: "three of cups",
          content: "blah blah blah"
      },{
          id: "39",
          rotation: 0,
          title: "four of cups",
          content: "blah blah blah"
      },{
          id: "40",
          rotation: 0,
          title: "five of cups",
          content: "blah blah blah"
      },{
          id: "41",
          rotation: 0,
          title: "six of cups",
          content: "blah blah blah"
      },{
          id: "42",
          rotation: 0,
          title: "seven of cups",
          content: "blah blah blah"
      },{
          id: "43",
          rotation: 0,
          title: "eight of cups",
          content: "blah blah blah"
      },{
          id: "44",
          rotation: 0,
          title: "nine of cups",
          content: "blah blah blah"
      },{
          id: "45",
          rotation: 0,
          title: "ten of cups",
          content: "blah blah blah"
      },{
          id: "46",
          rotation: 0,
          title: "page of cups",
          content: "blah blah blah"
      },{
          id: "47",
          rotation: 0,
          title: "knight of cups",
          content: "blah blah blah"
      },{
          id: "48",
          rotation: 0,
          title: "queen of cups",
          content: "blah blah blah"
      },{
          id: "49",
          rotation: 0,
          title: "king of cups",
          content: "blah blah blah"
      },{
          id: "50",
          rotation: 0,
          title: "ace of swords",
          content: "blah blah blah"
      },{
          id: "51",
          rotation: 0,
          title: "two of swords",
          content: "blah blah blah"
      },{
          id: "52",
          rotation: 0,
          title: "three of swords",
          content: "blah blah blah"
      },{
          id: "53",
          rotation: 0,
          title: "four of swords",
          content: "blah blah blah"
      },{
          id: "54",
          rotation: 0,
          title: "five of swords",
          content: "blah blah blah"
      },{
          id: "55",
          rotation: 0,
          title: "six of swords",
          content: "blah blah blah"
      },{
          id: "56",
          rotation: 0,
          title: "seven of swords",
          content: "blah blah blah"
      },{
          id: "57",
          rotation: 0,
          title: "eight of swords",
          content: "blah blah blah"
      },{
          id: "58",
          rotation: 0,
          title: "nine of swords",
          content: "blah blah blah"
      },{
          id: "59",
          rotation: 0,
          title: "ten of swords",
          content: "blah blah blah"
      },{
          id: "60",
          rotation: 0,
          title: "page of swords",
          content: "blah blah blah"
      },{
          id: "61",
          rotation: 0,
          title: "knight of swords",
          content: "blah blah blah"
      },{
          id: "62",
          rotation: 0,
          title: "queen of swords",
          content: "blah blah blah"
      },{
          id: "63",
          rotation: 0,
          title: "king of swords",
          content: "blah blah blah"
      },{
          id: "64",
          rotation: 0,
          title: "ace of pentacles",
          content: "blah blah blah"
      },{
          id: "65",
          rotation: 0,
          title: "two of pentacles",
          content: "blah blah blah"
      },{
          id: "66",
          rotation: 0,
          title: "three of pentacles",
          content: "blah blah blah"
      },{
          id: "67",
          rotation: 0,
          title: "four of pentacles",
          content: "blah blah blah"
      },{
          id: "68",
          rotation: 0,
          title: "five of pentacles",
          content: "blah blah blah"
      },{
          id: "69",
          rotation: 0,
          title: "six of pentacles",
          content: "blah blah blah"
      },{
          id: "70",
          rotation: 0,
          title: "seven of pentacles",
          content: "blah blah blah"
      },{
          id: "71",
          rotation: 0,
          title: "eight of pentacles",
          content: "blah blah blah"
      },{
          id: "72",
          rotation: 0,
          title: "nine of pentacles",
          content: "blah blah blah"
      },{
          id: "73",
          rotation: 0,
          title: "ten of pentacles",
          content: "blah blah blah"
      },{
          id: "74",
          rotation: 0,
          title: "page of pentacles",
          content: "blah blah blah"
      },{
          id: "75",
          rotation: 0,
          title: "knight of pentacles",
          content: "blah blah blah"
      },{
          id: "76",
          rotation: 0,
          title: "queen of pentacles",
          content: "blah blah blah"
      },{
          id: "77",
          rotation: 0,
          title: "king of pentacles",
          content: "blah blah blah"
      }
    ], 
    spreads: [
        {
            id: "spread-simple",
            name: "simple",
            image: "./spread/simple_icon.jpg",
            cards: 3
        },{
            id: "spread-cross",
            name: "cross",
            image: "./spread/cross_icon.jpg",
            cards: 5
        },{
            id: "spread-celtic-cross",
            name: "celtic cross",
            image: "./spread/celtic-cross_icon.jpg",
            cards: 10
        }
    ],
    shuffle: [],
    hand: [],
    selectSpread: {},
  }
  showDeck = () => {
    const { deck } = this.state;
    let newDeck = [...deck];
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
  shuffleThis = () => {
    let dealtDeck = document.getElementsByClassName('dealtCard');
    for (let i = 0; i < dealtDeck.length; i++) {
        dealtDeck[i].classList.add('shuffleDeck');
        setTimeout(() => {
            dealtDeck[i].classList.remove('shuffleDeck')
        }, 2000);
    };
  };
  
  selectCard = (e) => {
    const { selectSpread, deck, hand } = this.state;
    const t = e.currentTarget.id;
    const random = Math.floor(Math.random(1 - 0) * 2);
    if (hand.length === selectSpread.cards - 1) {
        document.getElementById("shuffle").style.display = "none";
    };
    if (hand.length < selectSpread.cards) {
      document.getElementById(t).style.display = "none";
      deck.filter(d => {
        if ( t === d.id ) {
            let newD = d
            newD.rotation = random
          this.setState({
            hand: [...hand, newD]
          })
        };
      });
    };
  };
  selectSpread = (e) => {
    const t = e.currentTarget.name;
    document.getElementById("spread-container").style.display = "none";
    document.getElementById("shuffle").style.display = "block";
    this.state.spreads.filter(s => {
      if ( t === s.name ) {
        this.setState({
            selectSpread: s
        });
      };
    })
    this.showDeck();
  };
  render(){
    const { hand, deck, shuffle, selectSpread, spreads } = this.state;

    return (
      <AppContainer> 
        <Header/>
          <Deck selectSpread={selectSpread} deck={deck} hand={hand} selectCard={this.selectCard} shuffleThis={this.shuffleThis} shuffle={shuffle}/>
          <Spreads spreads={spreads} selectSpread={this.selectSpread}/>
          { selectSpread.name === "simple" && <SpreadSheet hand={hand} selectSpread={selectSpread}/> }
          { selectSpread.name === "cross" && <SpreadSheet hand={hand} selectSpread={selectSpread}/> }
          { selectSpread.name === "celtic cross" && <SpreadSheet hand={hand} selectSpread={selectSpread}/> }
      </AppContainer>
    );
  };
};

const AppContainer = styled.div`
  width: 100vw;
  h1 {
    text-align: center;
  }
`;