import React, { Component } from 'react';
import styled               from 'styled-components';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import DisplaySpread from './DisplaySpread';
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
            sheet.push(<div key={num}><img src="./deck/back.jpg" alt="deck back"/></div>);
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
                <DisplaySpread 
                    hand={hand}
                    selectSpread={selectSpread}
                />
                <div>
                    <InfoContainer>
                        <h2>{selectSpread.name}</h2>
                        <ol>
                            {showInfo}
                        </ol>
                        <div>
                            <section id="restart">
                                <button className="purpleBtn" onClick={(e) => {showSpreadLayouts(e); this.resetShowSaveBtn();}}>
                                    Close
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
    width: 90%;
    max-height: 640px;
    padding-bottom: 80px;
    background-color: #fff!important;
    font-family: var(--decorative-font);
    position: relative;
    text-align: center;
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

// const Container = styled.div`
//     text-align: center;
//     width: 100%;
//     position: relative;
//     > section {
//         margin: 0 auto;
//         position: relative;
//         margin: 0 auto;
//         width: 100%;
//         display: grid;
//         > div {
//             &:first-of-type { grid-area: one; }
//             &:nth-of-type(2) { grid-area: two; }
//             &:nth-of-type(3) { grid-area: three; }
//             &:nth-of-type(4) { grid-area: four; }
//             &:nth-of-type(5) { grid-area: five; }
//             &:nth-of-type(6) { grid-area: six; }
//             &:nth-of-type(7) { grid-area: seven; }
//             &:nth-of-type(8) { grid-area: eight; }
//             &:nth-of-type(9) { grid-area: nine; }
//             &:nth-of-type(10) { grid-area: ten; }
//             &:nth-of-type(11) { grid-area: eleven; }
//             &:nth-of-type(12) { grid-area: twelve; }
//             &:nth-of-type(13) { grid-area: thirteen; }
//             > img {
//                 max-width: 80%;
//             }
//         }
//     }
//     @media only screen and (max-width: 640px) {
//         width: 100vw;
//     }
// `;
// const ContainerDealt = styled(Container)`
//     position: absolute;
//     top: 0;
// `;
// const ContainerSpread = styled(Container)`
//     position: relative;
//     img {
//         -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
//         filter: grayscale(100%);
//         opacity: .2;
//       }
// `;

const LocalWrapper = styled.div`
    margin: 20px auto;
    position: relative;
    display: none;
    grid-template-columns: calc(100% - 360px) 360px;
    grid-template-rows: 100%;
    grid-template-areas: ' spread info ';
    > div {
        position: relative;
        display: inline-block;
        &:first-of-type {
            grid-area: spread;
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