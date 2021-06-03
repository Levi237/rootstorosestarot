import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import * as routes from '../../constants/routes';

const HomePage = ({clearAll, pickRandomCard, showCard}) => {

    return(
        <HomeWrapper>
            <div>
                <h1>W<small>ELCOME TO</small></h1>
                <h1>R<small>OOTS TO </small><span>R<small>OSES</small></span> T<small>AROT</small></h1>
                <HomeIntro>
                    <section>
                        { showCard 
                            ? <img alt={showCard.title} src={`./deck/${showCard.id}.jpg`}/> 
                            : <><img src="/deck/back.jpg" alt="deck back"/><button onClick={() => {pickRandomCard();}}>Click Me!</button></>
                        }
                    </section>
                    <section>
                        <h3>
                            Please enjoy our humble beginnings.  There is definitely more to come!
                        </h3>
                        <p>
                            This website has been created with the intention of bringing 
                            tarot cards into the digital world. Choose a spread and your 
                            deck gets shuffled and put on display for your to scroll through 
                            and select your cards.  Feel luckier with 3 shuffles? Click the 
                            shuffle button as many times as you like while you are drawing cards. 
                        </p>
                        <p>
                            If you like your spread you can create an account, login and save it!
                        </p>
                <NavLink to={routes.LAYS} onClick={() => {clearAll();}}>View Tarot Spreads</NavLink>      
                    </section>
                </HomeIntro>
            </div>
        </HomeWrapper>
    );
};

const HomeWrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 40px);
    overflow: scroll;
    letter-spacing: 1px;
    color: var(--purple);
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(/img/roses-lightgold-pattern.png);
    background-size: 400px;
    // opacity: .5;
    position: relative;
    > div {
        display: inline-block;
        padding: 20px 40px;
        background-color: white;
    }
    h1 {
        font-family: var(--decorative-font);
        font-weight: 400;
        letter-width: 1px;
        &:first-of-type {
            font-weight: 600;
        }
        span {
            color: var(--gold);
        }
    }
`;
const HomeIntro = styled.section`
    max-width: 640px;
    margin: 20px auto 0;
    h3 {
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
        position: relative;
        &:first-of-type {
            width: 31.25%;
            img {
                width: 100%;
            }
            button {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
        &:last-of-type{
            width: 62.5%;
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