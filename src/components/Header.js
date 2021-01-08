import React, { Component } from 'react';
import styled               from 'styled-components';

export default class Header extends Component {
    render(){
        return(
            <LocalWrapper>
                <h1>Hello Angie :)</h1>
            </LocalWrapper>
        )
    }
}

const LocalWrapper = styled.header`
height: 80px;
background-color: black;
color: white;
margin-bottom: 40px;
`;