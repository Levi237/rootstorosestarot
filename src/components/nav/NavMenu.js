import React, { Component } from 'react'
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import * as routes from '../../constants/routes';

export default class Nav extends Component {


    render(){
        const { toggleHamburger, logout, user, showModal, showSpreadLayouts, clearAll } = this.props;
        
        return(
            <NavContainer id="menu" className="inactive">
                <div>
                    <CloseBtn className="close xClose" onClick={() => {toggleHamburger()}}>
                        x
                    </CloseBtn>
                    { user ? <h2>{user.email}</h2> : <h2>Roots to Roses Tarot</h2>}
                    <NavLink activeClassName="nav-active" to={routes.ROOT} onClick={(e) => {toggleHamburger(); clearAll();}}>HOME</NavLink>      
                    { user && <NavLink activeClassName="nav-active" to={routes.ACCT} onClick={(e) => {toggleHamburger(); clearAll();}}>MY READINGS</NavLink> }
                    <NavLink activeClassName="nav-active" to={routes.LAYS} onClick={(e) => {toggleHamburger(); clearAll();}}>TAROT LAYOUTS</NavLink>          
                    { user && <input type="submit" onClick={() => {logout(); toggleHamburger();}} value="logout" /> }
                    { !user && <input type="submit" onClick={(e) => {showModal(e); toggleHamburger();}} name="login" value="login" />
                    }
                    {/* <input type="submit" onClick={} value="FAQ" /> */}
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

    h2 {
        margin-bottom: 20px;
    }
    a,
    div {
        text-decoration: none;
        display: block;
        height: 36px;
        padding-top: 10px;
        color: var(--purple);
        transition: color .3s ease;
        text-align: center;
        font-size: 16px;
        > input {
            display: block;
            font-size: 16px;
            border: none;
            background-color: transparent;
            width: 200px;
            margin: 10px auto;
            text-align: center;
            text-transform: uppercase;
        }
    }
    a:hover,
    div > input:hover {
        color: var(--green)!important;
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