import React, { Component } from 'react';
import styled from 'styled-components';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import DisplaySpread from '../spreads/DisplaySpread';

export default class UserPage extends Component {
    state = {
        selectedSpread: []
    };

    showSpread = (e) => {
        const pickSpread = e.currentTarget.value;
        this.props.userSpreads.filter(m => {
            let x = m.timestamp.toDate().toDateString();
            if (x === pickSpread){
                this.setState({
                    selectedSpread: [...this.state.selectedSpread, m]
                });
            };
        });
    };
    render(){
        const {selectedSpread} = this.state;
        const {user, userSpreads, selectSpread} = this.props;

        const userSpreadsList = userSpreads.map((us, k) => {
            let dateCreated = us.timestamp.toDate().toDateString();
            console.log(us, "us")
            return (
                <li key={k}><button onClick={(e) => {this.showSpread(e)}} value={`${dateCreated}`}>{dateCreated} - {us.spread.name}</button></li>
            )
        });
    return(
        <DashboardWrapper>

            <section>
                    <h1>Welcome, {user.email}</h1>
                <div>
                    <ul>
                        {userSpreadsList}
                    </ul>
                </div>
            </section>

            <section>
            <DisplaySpread 
                hand={selectedSpread}
                selectSpread={selectSpread}
            />
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
    > section {
        &:last-of-type {
            grid-area: spread;
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