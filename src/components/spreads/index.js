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
                    <button key={key} id={s.id} name={s.name} className="dealtSpread" onClick={(e) => selectSpread(e)}>
                        <h2>{s.name}</h2>
                        <div style={{backgroundImage: `url(${s.image})`}}></div>
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
    > h2 {
        margin-bottom: 5px;
    }
    > button {
        color: white;
        text-shadow: 2px 2px 5px rgba(0,0,0,.75);
        display: inline-block;
        width: 30vw;
        max-width: 200px;
        height: 30vw;
        max-height: 200px;
        border: 2px solid white;
        margin: clamp(15px, 1vw, 1vw);
        vertical-align: top;
        background-color: transparent;
        > div {
            width: 100%;
            padding-top: 75%;
            background-size: contain;
            background-position: center center;
            background-repeat: no-repeat;
        }
    }
`;