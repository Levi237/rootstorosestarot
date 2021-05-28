import React from 'react';
import styled from 'styled-components';

// import { NavLink } from 'react-router-dom';
// import * as routes from '../../constants/routes';

const UserPage = ({user}) => {

    
    return(
        <DashboardWrapper>
            <section>

            </section>
            <section>
                <div>
                    <br/><br/>
                    {/* <h1>levieiko@gmail.com</h1> */}
                    <h1>{user.email}</h1>
                    <ul>
                        <li>
                            01/12/21 03:30pm - 13 card celtic cross
                        </li>
                        <li>
                            01/12/21 03:30pm - 13 card celtic cross
                        </li>
                        <li>
                            01/12/21 03:30pm - 13 card celtic cross
                        </li>
                        <li>
                            01/12/21 03:30pm - 13 card celtic cross
                        </li>
                        <li>
                            01/12/21 03:30pm - 13 card celtic cross
                        </li>
                        <li>
                            01/12/21 03:30pm - 13 card celtic cross
                        </li>
                        <li>
                            01/12/21 03:30pm - 13 card celtic cross
                        </li>
                    </ul>
                </div>
            </section>
        </DashboardWrapper>
    );
};

const DashboardWrapper = styled.div`
    width: 100vw;
    min-height: calc(100vh - 40px);
    display: grid;
    grid-template-columns: calc(100vw - 400px) 400px;
    grid-template-rows: 1fr;
    grid-template-areas: 'main sidebar';
    > section {
        &:first-of-type {
            grid-area: main;
        }
        &:last-of-type {
            grid-area: sidebar;
            > div {
                background-color: white;
                width: 90%;
                min-height: calc(100% - 100px);
                margin-top: 50px;
                li {
                    padding: 5px 0;
                }
            }
        }
    }
    @media only screen and (max-width: 640px) {
    }
`;
export default UserPage;