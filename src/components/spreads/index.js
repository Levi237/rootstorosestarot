import React, { Component } from 'react';
import styled from 'styled-components';

export default class Layouts extends Component {

    render(){
        const { layouts, selectSpread } = this.props
                const spreadOptions = layouts.map((l, key) => {
            return (
                    <button key={key} id={l.id} name={l.name} className="dealtSpread" onClick={(e) => selectSpread(e)}>
                        <h2>{l.name}</h2>
                        <div style={{backgroundImage: `url(${l.image})`}}></div>
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
    max-width: 640px;
    width: 100vw;
    margin: 0 auto;
    > button {
        color: white;
        text-shadow: 2px 2px 5px rgba(0,0,0,.75);
        display: inline-block;
        width: 30vw;
        max-width: 197px;
        height: 30vw;
        max-height: 197px;
        border: 2px solid white;
        margin: clamp(.1vw, 1vw, 8px);
        vertical-align: top;
        background-color: transparent;
        > h2 {
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
                // font-size: 3.6vw;
            }
            > div {}
        }
    }
`;