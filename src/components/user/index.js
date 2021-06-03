import React, { Component } from 'react';
import styled from 'styled-components';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import DisplaySpread from '../spreads/DisplaySpread';

export default class UserPage extends Component {
    state = {
        selected: null,
        userSpreads: []
    };
    componentDidMount(){
        this.userSpreadsList();
    };
//-------------> Get user spreads history
    userSpreadsList(){
        firebase.firestore()
        .collection('spreads')
        .orderBy('timestamp', 'desc')
        .onSnapshot(serverUpdate => {
            const sp = serverUpdate.docs.map(_doc => {
                const data = _doc.data();
                data['id'] = _doc.id;
                return data;
            });
            sp.forEach(f => { 
                if(f.uid === this.props.uid){
                    this.setState({ userSpreads: [...this.state.userSpreads, f] });
                    if (!this.state.selected){
                        this.setState({ selected: f });
                    }
                };
            });
        });
    };
//-- Show selected spread from list
    showSpread = (e) => {
        const target = e.currentTarget.value;
        this.state.userSpreads.forEach(m => {
            // let x = m.timestamp.toDate().toLocaleString();
            if (m.id === target){
                this.setState({
                    selected: m
                });
            };
        });
    };
    render(){
        const { selected, userSpreads } = this.state;
        const { user } = this.props;
//-- Generate List of users Spreads
        const userSpreadsList = userSpreads.map((us, k) => {
            let dateCreated = us.timestamp.toDate().toLocaleString();
            const cardList = us.hand.map((c, k) => {
                return <li key={k}>{c.title}</li>
            });
            return (
                <section key={k}
                    style={(this.state.selected && this.state.selected.id) === us.id ? {backgroundColor: 'transparent'} : {backgroundColor: 'rgba(0,0,0,.1)'}}
                >
                    <button 
                        onClick={(e) => {this.showSpread(e);}} 
                        value={us.id} 
                        style={(this.state.selected && this.state.selected.id) === us.id ? {color: 'var(--green)'} : {color: 'var(--purple)'}}
                    >
                        {us.spread.name}
                        <br/>
                        <small>{dateCreated}</small>
                    </button>
                    <div
                        style={(this.state.selected && this.state.selected.id) === us.id ? {height: '100%'} : {height: '0'}}
                    >
                        {/* <button>Delete Spread</button> */}
                        <ol>{cardList}</ol>
                    </div>
                </section>
            );
        });

        return (
            <DashboardWrapper>
                <DashboardBody>
                    <section>
                        <UserSpreadsList>
                            {userSpreadsList}
                        </UserSpreadsList>
                    </section>
                    <section>
                    {(selected && user) &&
                        <DisplaySpread 
                            hand={selected.hand}
                            selectSpread={selected.spread}
                        />
                    }
                    </section>
                </DashboardBody>
            </DashboardWrapper>
        );
    };
};
const DashboardWrapper = styled.div`
    width: 100vw;

`;
const UserSpreadsList = styled.div`
    background-color: white;
    width: 90%;
    height: calc(100vh - 110px);
    margin: 20px auto;
    overflow: scroll;
    section {
        padding: 5px 12px;
        border-bottom: 1px solid black;
        transition: background-color .3s ease-in-out;
        &:hover {
            background-color: transparent!important;
            cursor: pointer;
        }
        > div {
            overflow: hidden;
            transition: height .3s ease-in-out;
        }
        > button {
            font-size: 18px;
            border: none;
            background-color: transparent;
            text-align: left;
            &:hover {
                color: var(--green)!important;
            }
        }
    }
`;
const DashboardBody = styled.div`
    width: 100vw;
    min-height: calc(100vh - 40px);
    display: grid;
    grid-template-columns: 320px calc(100% - 320px);
    grid-template-rows: 1fr;
    grid-template-areas: 'info spread';
    .desktop {
        display: block;
    }
    .mobile {
        display: none;
    }
    > section {
        &:last-of-type {
            grid-area: spread;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &:first-of-type {
            grid-area: info;
            }
        }
    }
    @media only screen and (max-width: 900px) {
        grid-template-columns: 280px calc(100vw - 280px);
        > section {
            &:last-of-type {
            }
            &:first-of-type {
                > div {
                    padding: 5%;
                    background-color: white;
                    width: 80%;
                    min-height: calc(90% - 200px);
                    section {

                    }
                }
            }
        }
    }
    @media only screen and (max-width: 640px) {
        grid-template-columns: 100vw;
        grid-template-rows: auto auto;
        grid-template-areas: ' spread ' ' info ';
        .mobile {
            display: block;
            position: absolute;
            width: 100%;
        }
        .desktop {
            display: none;
        }
        > section {
            &:last-of-type {
                padding: 20px 0;
            }
            &:first-of-type {
                > div {
                    margin: 0 auto;
                    section {
                    }
                }
            }
        }
    }
`;