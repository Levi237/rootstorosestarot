import React, { Component } from 'react';
import styled from 'styled-components';

export default class Spreads extends Component {
    state = {
        selectSpread: "",
    }
    selectSpread = (e) => {
        const t = e.currentTarget.name;
        document.getElementById("spread-container").style.display = "none";
            this.setState({
                selectSpread: t
            });
    };
    render(){
        const { spreads } = this.props
                const spreadOptions = spreads.map((s, key) => {
            return (
                <button id={s.id} key={key} name={s.name} className="dealtCard" onClick={(e) => this.selectSpread(e)}>
                    <img src={s.image}/>
                </button>
            );
        });
        return(
            <LocalWrapper id="spread-container">
                {spreadOptions}
            </LocalWrapper>
        );
    };
};

const LocalWrapper = styled.section`
    text-align: center;
    button {
        border: none;
        background: transparent;
        vertical-align: middle;
        img {
            width: 20vw;
            min-width: 80px;
            max-width: 150px;
            margin: 5px;
        }
    }
`;