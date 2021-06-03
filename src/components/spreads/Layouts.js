import React, { Component } from 'react';
import styled from 'styled-components';

export default class Layouts extends Component {

    render(){
        const { layouts, selectThisSpread } = this.props
                const spreadOptions = layouts.map((l, key) => {
            return (
                    <button key={key} id={l.id} name={l.name} className="dealtSpread" onClick={(e) => selectThisSpread(e)}>
                        <h2>{l.name}</h2>
                        <div style={{backgroundImage: `url(${l.image})`}}></div>
                    </button>
            );
        });
        return(
            <SpreadContainer id="spread-container">
                {spreadOptions}
            </SpreadContainer>
        );
    };
};

const SpreadContainer = styled.section`
    text-align: center;
    max-width: 640px;
    width: 100vw;
    margin: 0 auto;
    background-image: url(/img/roses-lightgold-pattern.png);
    background-size: 250px;
    > button {
        color: white;
        display: inline-block;
        width: 30vw;
        max-width: 197px;
        height: 30vw;
        max-height: 197px;
        border: 2px solid var(--purple);
        margin: clamp(.1vw, 1vw, 8px);
        vertical-align: top;
        background-color: #fff;
        > h2 {
            color: var(--purple);
            font-weight: 100;
            font-family: var(--decorative-font);
            text-transform: capitalize;
        }
        > div {
            width: 100%;
            padding-top: 75%;
            background-size: contain;
            background-position: center center;
            background-repeat: no-repeat;
        }
    }
    @media only screen and (max-width: 640px) {
        > button {
            width: calc(45vw - 4px);
            max-width: calc(45vw - 4px);
            height: calc(45vw - 4px);
            max-height: calc(45vw - 4px);
            > h2 {
            }
            > div {}
        }
    }
`;