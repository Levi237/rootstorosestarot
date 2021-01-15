import React, { Component } from 'react';
import styled from 'styled-components';

export default class Spreads extends Component {
    componentDidUpdate(){
        this.animateDeck();
    };
    animateDeck(){   
        let getCard = document.getElementsByClassName('dealtCard');
        for (let i = 0; i < getCard.length; i++) {
            setTimeout(() => {
                setTimeout(() => {
                    getCard[i].classList.remove('shuffleDeck');
                }, i*20);
            }, 0);
        };
    };
    render(){
        const { spreads, selectSpread } = this.props
                const spreadOptions = spreads.map((s, key) => {
            return (
                <button id={s.id} key={key} name={s.name} className="dealtSpread" onClick={(e) => selectSpread(e)}>
                    <img src={s.image}/>
                </button>
            );
        });
        return(
            <LocalWrapper id="spread-container">
                {spreadOptions}
            </LocalWrapper>
        );
    };
};

const LocalWrapper = styled.section`
    text-align: center;
    button {
        border: none;
        background: transparent;
        vertical-align: middle;
        img {
            width: 20vw;
            min-width: 80px;
            max-width: 150px;
            margin: 5px;
        }
    }
`;