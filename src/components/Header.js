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
                {/* <section id="shuffle">
                            <button onClick={(e) => shuffleThis(e)}>
                                Shuffle
                            </button>
                        </section> */}
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
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: left;
`;
