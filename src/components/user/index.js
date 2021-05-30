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

// showSpread = (e) => {
//     const { userSpreads } = this.props;
//     const pickSpread = e.currentTarget.timestamp;
//     const userSpread = userSpreads.map(m => {
//         if (m.timestamp === pickSpread){
//             this.setState({
//                 selectedSpread: userSpread
//             });
//         };
//     });
// };
    render(){
        const {selectedSpread} = this.state;
        const {user, userSpreads, selectSpread} = this.props;

    return(
        <DashboardWrapper>

            <section>
                    <h1>{user.email}</h1>
                <div>
                    <ul>
                        <li>
                            {/* <button>{userSpreads[0].timestamp}</button> */}
                        </li>
                        <li>
                            88/88/88 88:88pm - 88 card celtic cross
                        </li>
                        <li>
                            88/88/88 88:88pm - 88 card celtic cross
                        </li>
                        <li>
                            88/88/88 88:88pm - 88 card celtic cross
                        </li>
                        <li>
                            88/88/88 88:88pm - 88 card celtic cross
                        </li>
                        <li>
                            88/88/88 88:88pm - 88 card celtic cross
                        </li>
                        <li>
                            88/88/88 88:88pm - 88 card celtic cross
                        </li>
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
                    font-size: 18px;
                    &:hover {
                        color: blue;
                        cursor: pointer;
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