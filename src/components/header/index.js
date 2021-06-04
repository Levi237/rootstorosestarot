import React, { Component } from 'react';
import styled               from 'styled-components';

import HamburgerNav from '../nav/HamburgerNav';

//----------------------------------------------> GLOBAL HEADER / NAV
//----------------------------------------------> Animate Spell out logo name from logoHeader
export default class Header extends Component {
    state = {
        logoHeader: "Roots to Roses Tarot"
    }
    componentDidMount(){        
        this.animateLogo();
    };
    animateLogo(){   
        const getLogo = document.getElementsByClassName('camo-logo');
        for (let i = 0; i < getLogo.length; i++) {
            const firstWord = this.state.logoHeader.split(' ')[0].length;
            let x = i*200 + firstWord*850;
                setTimeout(() => {
                    if (i < firstWord){
                        setTimeout(() => {
                            getLogo[i].classList.add('show-logo');
                        }, i*850);
                    } else {
                        setTimeout(() => {
                            getLogo[i].classList.add('show-logo');
                        }, x);
                    }
            }, 0);
        };
    };
    render(){
        const { showModal, user, uid, shuffleThis, toggleHamburger } = this.props;
        const mapLogo = [...this.state.logoHeader].map((l,k) => {
            return <span key={k} className="camo-logo">{l}</span>
        })
        return(
            <LocalWrapper>
                <LogoHeader>             
                    {mapLogo}
                </LogoHeader>
                {/* <section id="shuffle-nav">
                    <button className="whiteBtn" onClick={(e) => shuffleThis(e)}>
                        Shuffle
                    </button>
                </section> */}
                <section id="login-logout">
                { uid === null ?
                    <button className="desktop-inline" onClick={(e) => {showModal(e)}} name="login" value="login">Login</button>
                    :
                    <span className="desktop-inline">{user.email}&emsp;</span>
                }
                <HamburgerNav toggleHamburger={toggleHamburger} />
                </section>
            </LocalWrapper>
        );
    };
};

const LogoHeader = styled.h1`
    line-height: 100%;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    padding-left: 10px;
    @media screen and (max-width: 900px) {
        padding-left: 5px;
    }
`;

const LocalWrapper = styled.header`
    background-color: #fff;
    box-shadow: 0px 5px 15px rgba(0,0,0,.2);
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: left;
    > section {
        display: flex;
        align-items: center;
        justify-content: left;
    }
    #shuffle-nav {
        display: none;
        position: absolute;
        width: 100%;
        text-align: center;
    }
    #login-logout {
        position: absolute;
        right: 10px;
        > div {
            display: inline-block;
            text-transform: uppercase;
        }
        button {
            border: none;
            background: transparent;
            text-decoration: underline!important;
            margin-right: 10px;
        }
    }
`;
