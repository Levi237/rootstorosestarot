import React, { Component } from 'react';
import styled               from 'styled-components';

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
        const mapLogo = [...this.state.logoHeader].map((l,k) => {
            return <span key={k} className="camo-logo">{l}</span>
        })
        return(
            <LocalWrapper>
                <LogoHeader>             
                    {mapLogo}
                </LogoHeader>
            </LocalWrapper>
        );
    };
};

const LogoHeader = styled.h1`
    line-height: 100%;
    font-size: 20px;

    white-space: nowrap;
    overflow: hidden;


    @media screen and (max-width: 900px) {
        padding-left: 5px;
    }
`;

const LocalWrapper = styled.header`
    height: 80px;
    background-color: transparent;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 900px) {
        height: 40px;
        margin-bottom: 10px;
        align-items: top!important;
        justify-content: left;
    }
`;
