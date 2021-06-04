import React, { Component } from 'react';
import styled               from 'styled-components';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import ShowSpread from './ShowSpread';
export default class SpreadSheet extends Component {
state = {
    showSaveBtn: true
}
    saveHand = async () => {
        const { hand, selectSpread } = this.props;
        const newFromDB = await firebase.firestore().collection('spreads').add({
                hand: hand,
                spread: selectSpread,
                uid: firebase.auth().currentUser.uid,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
        return newFromDB;
    };

    hideBtn = () => {
        this.setState({
            showSaveBtn: false
        });
    };
    resetShowSaveBtn = () => {
        setTimeout(() => {
            this.setState({
                showSaveBtn: true
            });
        }, 1200);
    };
    render(){
        const { hand, selectSpread, showSpreadLayouts, user, showModal } = this.props;

        let sheet = [];
        let num = selectSpread.cards;
        while (num > 0) {
            num -= 1;
            sheet.push(<div key={num}><img src="./deck/back.png" alt="deck back"/></div>);
        };

        const showInfo = hand.map((h, k) => {
            return (
                <li key={k} >
                    <span>
                        #{h.id}: {h.title}
                    </span>
                </li>
            );
        });

        return(
            <LocalWrapper id="spreadsheet-container">
                <div>
                    <ShowSpread 
                        hand={hand}
                        selectSpread={selectSpread}
                    />
                </div>
                <div>
                    <InfoContainer>
                    <section id="shuffle-nav">
                        <button className="purpleBtn">
                            Shuffle
                        </button>
                    </section>
                        <h2>{selectSpread.name}</h2>
                        <ol>
                            {showInfo}
                        </ol>
                        <div>
                            <section id="restart">
                                <button className="purpleBtn" onClick={(e) => {showSpreadLayouts(e); this.resetShowSaveBtn();}}>
                                    Go Back
                                </button>
                            </section>
                            <section id="save">
                            { (user && hand.length > 0 && hand.length === selectSpread.cards && this.state.showSaveBtn) && 
                                <button className="purpleBtn" onClick={() => {this.saveHand(); this.hideBtn();}}>Save</button> 
                            }
                            { (!user && hand.length === selectSpread.cards) && 
                                <button className="purpleBtn" onClick={(e) => {showModal(e)}} name="login">Save</button> 
                            }
                            { (!user && hand.length < selectSpread.cards) && 
                                <button className="purpleBtn" onClick={(e) => {showModal(e)}} name="login">Log In</button> 
                            }
                            </section>
                        </div>
                    </InfoContainer>
                </div>
            </LocalWrapper>
        );
    };
};
const InfoContainer = styled.div`
    margin-top: 20px;
    width: 90%;
    max-height: 640px;
    padding-bottom: 80px;
    background-color: #fff!important;
    font-family: var(--decorative-font);
    position: relative;
    text-align: center;
    box-shadow: 4px 4px 14px rgba(0,0,0,.2);

    h2 {
        color: var(--purple);
        padding: 30px 0 0;
        font-size: 32px;
        text-transform: capitalize;
    }

    ol {
        margin-left: 20px;
        text-align: left;
        li {
            font-family: var(--decorative-font);
            color: var(--green);
            span {
                color: var(--purple);
                font-size: 120%;
                vertical-align: middle;
                line-height: 160%;
            }
        }
    }

    > div:last-of-type {
        position: absolute;
        bottom: 20px;
        width: 100%;
    }

    #restart,
    #save {
        display: inline-block;
        margin: 0 10px;
        button {
            margin: 10px auto 0;
            padding: 10px 36px;
            font-size: 20px;
        }
    }
    
    @media only screen and (max-width: 640px) {
        margin: 40px auto;
    }
`;

const LocalWrapper = styled.div`
    margin: 0 auto;
    position: relative;
    display: none;
    grid-template-columns: calc(100% - 360px) 360px;
    grid-template-rows: calc(100vh - 40px);
    grid-template-areas: ' spread info ';
    > div {
        position: relative;
        display: inline-block;
        &:first-of-type {
            grid-area: spread;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &:last-of-type {
            grid-area: info;
        }
    }
    @media only screen and (max-width: 640px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        grid-template-areas: ' spread ' ' info ';
    }
`;