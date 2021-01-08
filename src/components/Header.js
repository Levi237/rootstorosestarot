import React, { Component } from 'react';
import styled               from 'styled-components';

export default class Header extends Component {
    render(){
        return(
            <LocalWrapper>
                <h1>Roots to <i>Roses</i> Tarot</h1>
            </LocalWrapper>
        )
    }
}

const LocalWrapper = styled.header`
    height: 80px;
    background-color: black;
    color: white;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 900px) {
        height: 40px;
        margin-bottom: 10px;
    }
`;