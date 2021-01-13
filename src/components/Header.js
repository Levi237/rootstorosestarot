import React, { Component } from 'react';
import styled               from 'styled-components';

export default class Header extends Component {
    render(){
        return(
            <LocalWrapper>
                <span>Roots to <i>Roses</i> Tarot</span>
            </LocalWrapper>
        )
    }
}

const LocalWrapper = styled.header`
    height: 80px;
    background-color: transparent;
    color: purple;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        line-height: 100%;
        font-family: Times New Roman;
        font-style: italic;
    }
    @media screen and (max-width: 900px) {
        height: 40px;
        margin-bottom: 10px;
        align-items: top!important;
        justify-content: left;
        span {
            padding-left: 5px;
        }
    }
`;