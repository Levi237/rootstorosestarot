import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import * as routes from '../../constants/routes';

const HomePage = ({clearAll}) => {
    return(
        <HomeWrapper>
            <h1>W<small>ELCOME TO</small></h1>
            <h1>R<small>OOTS TO </small><span>R<small>OSES</small></span> T<small>AROT</small></h1>
            <HomeIntro>
                <section><img src="/deck/back.jpg" alt="deck back"/></section>
                <section>
                    <h2>
                        Lorem ipsum dolor sit amet, 
                    </h2>
                    <p>
                        consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim 
                        ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <p>
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim 
                        id est laborum.
                    </p>
            <NavLink to={routes.LAYS} onClick={(e) => {clearAll();}}>View Tarot Spreads</NavLink>      
                </section>
            </HomeIntro>
        </HomeWrapper>
    );
};

const HomeWrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 40px);
    overflow: scroll;
    letter-spacing: 1px;
    color: #fff;
    h1 {
        font-family: var(--decorative-font);
        font-weight: 400;
        letter-width: 1px;
        &:first-of-type {
            font-weight: 600;
            margin-top: 60px;
        }
        span {
            color: var(--gold);
        }
    }
`;
const HomeIntro = styled.section`
    max-width: 640px;
    margin: 40px auto;
    h2 {
        margin-bottom: 20px;
    }
    p {
        margin-bottom: 20px;
    }
    a {
        color: var(--gold);
        &:hover {
            opacity: .8;
        }
    }
    > section {
        display: inline-block;
        &:first-of-type {
            width: 31.25%;
            img {
                width: 100%;
            }
        }
        &:last-of-type{
            width: 62.5%;
            margin-top: 6.25%;
            margin-left: 6.25%;
            vertical-align: top;
        }
    }
    @media screen and (max-width: 640px) {
        width: 90%;
        > section {
            display: block;
            margin: 20px auto 60px!important;
            &:first-of-type {
                width: 60%;

                img {
                    width: 100%;
                }
            }
            &:last-of-type{
                width: 100%;
                vertical-align: top;
            }
        }
    }
`;

export default HomePage;