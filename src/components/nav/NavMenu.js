import React, { Component } from 'react'
import styled from 'styled-components';


export default class Nav extends Component {


    render(){
        const { toggleHamburger, logout } = this.props;
        
        return(
            <NavContainer id="menu" className="inactive">
                <div>
                    <CloseBtn className="close xClose" onClick={() => {toggleHamburger()}}>
                        x
                    </CloseBtn>
                    {/* <input onClick={} value="HOME" /> */}
                    {/* <input onClick={} value="ACCOUNT" /> */}
                    <input type="submit" onClick={() => {toggleHamburger(); logout();}} value="LOGOUT" />
                    {/* <input onClick={} value="FAQ" /> */}
                </div>
            </NavContainer>
        );
    };
};

const NavContainer = styled.div`
    text-align: center;
    font-size: 20px;
    right: 0;
    z-index: 111;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #fff;
    color: var(--purple);
    padding-top: 60px;

    position: fixed;

    div {
        text-decoration: none;
        display: block;
        height: 36px;
        padding-top: 10px;
        color: var(--purple);
        transition: color .3s ease;
    }
    div:hover {
        color: var(--green);
        cursor: pointer;
    }
    
    button {
        position: absolute;
        top: 5px;
        right: 5px;
        padding: 5px;
        color: var(--purple);
        border: none;
        font-size: 14px;
    }
    @media screen and (max-height: 500px) {
        font-size: 5vh;
        a {
            height: 9vh;
            padding-top: 0;
        }
    }
`;
const CloseBtn = styled.button`
    background-color: transparent;
    border: 1px solid var(--purple)!important;
    color: var(--purple)!important;
    border-radius: 100%;
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    max-height: 30px;
    max-width: 30px;
    min-height: 30px;
    min-width: 30px;
    &:hover {
        border: 1px solid var(--green)!important;
        color: var(--green)!important;
    }
`;