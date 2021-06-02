import React, { Component } from 'react';
import styled from 'styled-components';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import DisplaySpread from '../spreads/DisplaySpread';

export default class UserPage extends Component {
    state = {
        selected: null,
        userSpreads: [],
    };
    componentDidMount(){
        this.userSpreadsList();
    }
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
                };
            });
        });
    };
    showSpread = (e) => {
        const target = e.currentTarget.value;
        this.state.userSpreads.forEach(m => {
            let x = m.timestamp.toDate().toLocaleString();
            if (x === target){
                this.setState({
                    selected: m
                });
            };
        });
    };
    render(){
        const { selected, userSpreads } = this.state;
        const { user } = this.props;
        const userSpreadsList = userSpreads.map((us, k) => {
            let dateCreated = us.timestamp.toDate().toLocaleString();
            const cardList = us.hand.map((c, k) => {
                return (
                    <li key={k}>
                        {c.title}
                    </li>
                )
            })
            return (
                <section key={k}>
                    <button onCsectionck={(e) => {this.showSpread(e);}} value={`${dateCreated}`}>
                        {us.spread.name}
                        <br/>
                        <small>{dateCreated}</small>
                    </button>
                    <div>
                        <ol>
                            {cardList}
                        </ol>
                    </div>
                </section>
            );
        });
        return(
            <DashboardWrapper>
                <section>
                    { user && <h1 class="desktop">Welcome, {user.email}</h1> }
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
            </DashboardWrapper>
        );
    };
};

const UserSpreadsList = styled.div`
    padding: 5%;
    background-color: white;
    width: 80%;
    min-height: calc(90% - 200px);
    margin: 0 auto;
    overflow: scroll;

    section {
        padding: 5px 0;
        button {
            font-size: 18px;
            border: none;
            background-color: transparent;
            text-align: left;
            &:hover {
                color: blue;
                cursor: pointer;
            }
        }
    }
`;
const DashboardWrapper = styled.div`
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