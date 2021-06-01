import React, { Component } from 'react';
import styled from 'styled-components';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import DisplaySpread from '../spreads/DisplaySpread';

export default class UserPage extends Component {
    state = {
        selected: []
    };

    showSpread = (e) => {
        const target = e.currentTarget.value;
        this.props.userSpreads.filter(m => {
            let x = m.timestamp.toDate().toLocaleString();
            if (x === target){
                this.setState({
                    selected: [m]
                });
            };
        });
    };
    render(){
        const { selected } = this.state;
        const { user, userSpreads } = this.props;
        const userSpreadsList = userSpreads.map((us, k) => {
            let dateCreated = us.timestamp.toDate().toLocaleString();
            return (
                <li key={k}><button onClick={(e) => {this.showSpread(e);}} value={`${dateCreated}`}>{dateCreated} - {us.spread.name}</button></li>
            );
        });
        return(
            <DashboardWrapper>
                <section>
                        <h1 class="desktop">Welcome, {user.email}</h1>
                    <div>
                        <ul>
                            {userSpreadsList}
                        </ul>
                    </div>
                </section>
                <section>
                {selected[0] &&
                    <DisplaySpread 
                        hand={selected[0].hand}
                        selectSpread={selected[0].spread}
                    />
                }
                </section>
            </DashboardWrapper>
        );
    };
};

const DashboardWrapper = styled.div`
    width: 100vw;
    min-height: calc(100vh - 40px);
    display: grid;
    grid-template-columns: 1fr 1fr;
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
            > div {
                padding: 5%;
                background-color: white;
                width: 80%;
                min-height: calc(90% - 200px);
                margin: 100px auto 0;
                overflow: scroll;
                li {
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
                    // margin: 100px auto 0;
                    li {

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
                    li {

                    }
                }
            }
        }
    }
`;