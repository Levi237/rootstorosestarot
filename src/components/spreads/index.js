import React, { Component } from 'react';
import styled from 'styled-components';

import Deck                 from './Deck';
import Layouts              from './Layouts';
import SpreadSheet          from './SpreadSheet';
export default class LayoutsIndex extends Component {

    render(){
        
        const { animateDeck, deck, hand, selectCard, shuffle, selectThisSpread, layouts, showSpreadLayouts, showModal, user, selectSpread, shuffleThis } = this.props;
        return(
            <LocalWrapper>
                    <h1 id="spread-header">pick your tarot layout</h1>
                    <Deck 
                        animateDeck={animateDeck}
                        deck={deck} 
                        hand={hand} 
                        selectCard={selectCard} 
                        selectSpread={selectSpread} 
                        shuffle={shuffle} 
                        />
                    <Layouts 
                        selectThisSpread={selectThisSpread}
                        layouts={layouts} 
                        />
                    <SpreadSheet 
                        hand={hand} 
                        selectSpread={selectSpread} 
                        showSpreadLayouts={showSpreadLayouts}
                        showModal={showModal}
                        user={user}
                        shuffleThis={shuffleThis}
                        />
            </LocalWrapper>
        );
    };
};

const LocalWrapper = styled.div`

`;
