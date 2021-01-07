import React, { Component } from 'react';
import styled from 'styled-components';

export default class Spreads extends Component {
    state = {
        selectSpread: "",
    }
    selectSpread = (e) => {
        const { selectSpread } = this.state;
        const t = e.currentTarget.name;
        // document.getElementById("shuffle").style.display = "none";
        // if (selectSpread.length < 1) {
            this.setState({
                selectSpread: t
            });
            // document.getElementById(t).style.display = "none";
        // };
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
            <LocalWrapper>
                {spreadOptions}
            </LocalWrapper>
        );
    };
};

const LocalWrapper = styled.div`
`;